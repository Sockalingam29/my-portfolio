"use client";
import useSWR from 'swr';

export default function GuestBookEntries() {

    const fetcher = async (url) => {
        console.log("Fetching data!!!");
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };

    const { data: messages, error } = useSWR('/api/guestbook', fetcher);

    if (error) {
        console.log(error);
        return <div className='italic'>Oops! There seems to be an error!</div>;
    }

    if (!messages) return <Loading />;

    return (
        <div>
            <ul className='mt-12 flex flex-col-reverse'>
                {messages.map((user) => (
                    <li key={user._id} className='mb-10'>
                        <div>{user.message}</div>
                        <div className='mt-1 flex items-center'>
                            <img loading='lazy' className='h-5 w-5 rounded-full' src={user.image} />
                            <span className='font-light text-sm ms-2 text-neutral-300'>{user.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const Loading = () => {
    return (
        <div className='mt-12 flex items-center'>
            <span className='sr-only'>Loading...</span>
            <div className='h-4 w-4 me-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-4 w-4 me-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-4 w-4 me-2 bg-white rounded-full animate-bounce'></div>
        </div>
    )
}