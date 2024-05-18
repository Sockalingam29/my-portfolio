"use client";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import restrictedWords from 'profane-words'

export default function GuestBookForm({ fetchGuestBookEntries }) {
    const [isPending, setIsPending] = useState(false);

    const postMessage = async (e) => {
        e.preventDefault();
        if (e.target.entry.value.length > 500) {
            toast.error('Message can\'t be more than 500 characters', {
                position: "top-center",
                autoClose: 2000,
                closeOnClick: true,
                draggable: true,
                theme: "dark"
            });

        }
        else if (e.target.name.value.length > 30) {
            toast.error('Name can\'t be more than 30 characters', {
                position: "top-center",
                autoClose: 2000,
                closeOnClick: true,
                draggable: true,
                theme: "dark"
            });
        }
        else {
            const flag = handleRestrictedWords(e.target.entry.value) || handleRestrictedWords(e.target.name.value);
            setIsPending(true);
            const body = {
                message: e.target.entry.value,
                name: e.target.name.value,
                flag: flag
            };

            const res = await fetch('/api/guestbook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            await fetchGuestBookEntries();
            if (flag) {
                toast.info('Thank you! Your message has been submitted for review.', {
                    position: "top-center",
                    autoClose: 2000,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark"
                });
            }
            else {
                toast.success('Thanks for your entry :)', {
                    position: "top-center",
                    autoClose: 2000,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark"
                });
            }
            setIsPending(false);
            console.log(res);
            e.target.entry.value = '';
            e.target.name.value = '';
        }
    };

    const handleRestrictedWords = (message) => {
        const words = message.split(/\s+/);
        const flag = words.some(word => restrictedWords.includes(word.toLowerCase()));
        return flag;
    }

    return (
        <form onSubmit={postMessage} className="max-w-2xl">
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                <input
                    aria-label="Your message"
                    placeholder="Your message*"
                    name="entry"
                    type="text"
                    required
                    className="md:mr-2 px-4 py-2 mt-2 block w-11/12 md:w-full border-neutral-300 rounded-md bg-neutral-800  text-neutral-100"
                />
                <div className="flex w-11/12 md:w-auto">
                    <input
                        aria-label="Your Name"
                        placeholder="Your Name"
                        name="name"
                        type="text"
                        className="mr-2 px-4 py-2 mt-2 block w-full md:w-48 border-neutral-300 rounded-md bg-neutral-800  text-neutral-100"
                    />

                    <button
                        className="flex items-center justify-center mt-2 px-8 md:px-4 py-2  bg-neutral-700 text-neutral-100 rounded"
                        type="submit"
                        disabled={isPending}
                    >
                        {!isPending &&
                            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <path d="m3 3 3 9-3 9 19-9Z"></path>
                                <path d="M6 12h16"></path>
                            </svg>
                        }

                        {isPending &&
                            <svg aria-hidden="true" width="24" height="24" className="animate-spin text-neutral-800 fill-neutral-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        }
                    </button>
                </div>
            </div>
            <ToastContainer />
        </form>

    )
}