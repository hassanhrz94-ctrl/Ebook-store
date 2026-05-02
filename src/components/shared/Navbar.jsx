'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

   const userData = authClient.useSession();
  const user = userData.data?.user;
console.log(user)
  const handleSignOut = async () => {
    await authClient.signOut();
  }
    return (
        <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4">
            
            <h1 className="text-xl font-semibold">ebook</h1>

            <ul className="hidden md:flex gap-8 text-sm font-medium">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/allBooks">All Books</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>

           {!user &&
             <div className='flex gap-3'>
                <Link href={"/signup"} className="btn btn-primary">
                    Register
                </Link>

                <Link href={"/signin"} className="btn btn-outline">
                    Log In
                </Link>
            </div>
           }
           
            {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">Log Out</Button>
            </div>
          )}
        </nav>
    );
};

export default Navbar;