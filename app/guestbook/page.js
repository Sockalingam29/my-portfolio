// import { getServerSession } from "next-auth/next";
// import { authOptions } from "/app/api/auth/[...nextauth]/route";
import GuestBookContents from "./contents";

export default async function Home() {

    // const session = await getServerSession(authOptions);
    // console.log(session);
    return (
        <div className="px-4 my-16 mx-auto lg:w-4/5">
            <h1 className="text-3xl font-medium">sign my guestbook</h1>
            <p className="font-extralight text=sm mb-14 mt-4">Write something for the future visitors and me!</p>
            <GuestBookContents />
        </div>
    );
}




