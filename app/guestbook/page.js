import { getServerSession } from "next-auth/next";
import { authOptions } from "/app/api/auth/[...nextauth]/route";
import { SignOutButton, SignInButton } from "./button";
import GuestBookForm from "./form";
import GuestBookEntries from "./entries";

export default async function Home() {

    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <div className="px-4 my-16 mx-auto lg:w-4/5">
            <h1 className="text-3xl font-medium">sign my guestbook</h1>
            {session?.user ? (
                <>
                    <GuestBookForm />
                    <SignOutButton session={session} />
                </>
            )
                : (
                    <SignInButton />
                )}
            <GuestBookEntries />
        </div>
    );
}




