"use client";
import { useState } from "react";

export default function GuestBookForm({ session, fetchGuestBookEntries }) {
    const [isPending, setIsPending] = useState(false);
    
    const postMessage = async (e) => {
        setIsPending(true);
        e.preventDefault();
        const body = {
            message: e.target.entry.value,
            name: session.user.name,
            image: session.user.image,
            email: session.user.email,
        };

        const res = await fetch('/api/guestbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        await fetchGuestBookEntries();
        e.target.entry.value = '';
        console.log(res);
        setIsPending(false);
    };

    return (
        <form onSubmit={postMessage} className="mt-6 relative max-w-2xl">
            <input
                aria-label="Your message"
                placeholder="Your message..."
                name="entry"
                type="text"
                required
                className="pl-4 pr-32 py-2 mt-1 block w-full border-neutral-300 rounded-md bg-neutral-800  text-neutral-100"
            />
            <button
                className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 h-8 bg-neutral-700 text-neutral-100 rounded w-16"
                type="submit"
                disabled={isPending}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 3 3 9-3 9 19-9Z"></path>
                    <path d="M6 12h16"></path>
                </svg>
            </button>

        </form>

    )
}