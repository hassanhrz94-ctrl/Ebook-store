import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
              <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4">
      <h1 className=" text-xl font-semibold">ebook</h1>

      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <Link href={'/home'}><li className="cursor-pointer">Home</li></Link>
        <Link href={'/allBooks'}><li className="cursor-pointer">All Books</li></Link>
      </ul>

      <button className="bg-white text-pink-500 px-4 py-1 rounded-md text-sm font-medium">
        Login
      </button>
    </nav>
    
        </div>
        
    );
};

export default Navbar;