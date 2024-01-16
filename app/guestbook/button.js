"use client";
import { signIn, signOut } from "next-auth/react"
import githubLogo from "../assets/images/github.png";
import Image from 'next/image'

export function SignOutButton({ session }) {
    return (
        <div className="text-sm text-neutral-300 mt-2">
            <span className="italic ">Signed in as {session.user.name} </span>
            <button
                className="ml-2 font-semibold"
                onClick={() => signOut()}
            >
                Sign out
            </button>
        </div>
    )
}

export function SignInButton() {
    return (
        <button
            className="px-3 my-6 py-2 border border-neutral-700 bg-neutral-800 rounded text-sm inline-flex items-center leading-4 text-neutral-100"
            onClick={() => signIn('github')}
        >
            <Image src={githubLogo} alt="GitHub logo" width="20" height="20" />
            <div className="ml-3">Sign in with GitHub</div>
        </button>

    )
}

