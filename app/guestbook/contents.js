"use client";
import GuestBookForm from "./form";
import GuestBookEntries from "./entries";
// import { SignOutButton, SignInButton } from "./button";
import { useEffect, useState } from "react";

export default function GuestBookContents() {
    const [messages, setMessages] = useState([]);

    const fetchGuestBookEntries = async () => {
        try {
            const response = await fetch('/api/guestbook');
            const jsonResponse = await response.json();
            setMessages(jsonResponse);
        } catch (error) {
            setMessages(['Error fetching data']);
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchGuestBookEntries();
    }, []);

    return (
        <div>
            <GuestBookForm fetchGuestBookEntries={fetchGuestBookEntries} />
            {/* {session ? (
                <> 
             <SignOutButton session={session} /> 
             </>
            )
                : (
                    <SignInButton />
                )} */}
            <GuestBookEntries messages={messages} />
        </div>
    )
}