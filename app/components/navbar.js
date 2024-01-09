'use client';
import Link from 'next/link'
import { useState } from 'react';
import '../globals.css'

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    }
    return (
        <div className="sticky z-10 top-0 shadow-sm shadow-[#1b1b1b] backdrop-blur-3xl">
            <div className="mx-auto lg:w-4/5 my-6 md:flex justify-between items-baseline">
                <div className='flex justify-between items-center'>
                    <Link href='/' style={{ "fontFamily": "'Rubik Lines', system- ui" }} className="px-4 py-4 cursor-pointer hover:text-neutral-200 text-2xl tracking-wider">sockalingam</Link>
                    <div onClick={toggleNavbar} className='md:hidden px-4 py-4'>
                        {navbarOpen && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                        {!navbarOpen && <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>}
                    </div>
                </div>
                <div className={navbarOpen ? "flex flex-col md:flex md:flex-row" : "hidden md:flex md:flex-row"}>
                    <Link href='/' className="px-4 py-4 cursor-pointer hover:text-neutral-200 font-medium">home</Link>
                    <Link href="/experience" className="px-4 py-4 cursor-pointer hover:text-neutral-200 font-medium">experience</Link>
                    <Link href='/' className="px-4 py-4 cursor-pointer hover:text-neutral-200 font-medium">projects</Link>
                    <Link href='/guestbook' className="px-4 py-4 cursor-pointer hover:text-neutral-200 font-medium">guestbook</Link>

                </div>
            </div >
        </div>
    )
}
