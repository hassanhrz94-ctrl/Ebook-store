import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4">
            
            <h1 className="text-xl font-semibold">ebook</h1>

            <ul className="hidden md:flex gap-8 text-sm font-medium">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/allBooks">All Books</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>

            <div className='flex gap-3'>
                <Link href={"/signup"} className="btn btn-primary">
                    Register
                </Link>

                <Link href={"/signin"} className="btn btn-outline">
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;