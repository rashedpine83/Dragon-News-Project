"use client"
import Image from 'next/image';
import Link from 'next/link';
import ImageAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';



const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
  

    return (
        <div className='flex justify-between container mx-auto mt-5'>
            <div></div>
             <ul className='flex justify-between items-center gap-4 text-gray-600'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            {user ? (
    <div className='flex justify-between items-center gap-4'>
        <p>hello, {user.name}</p>
        <Image 
            src={user.image || ImageAvatar} 
            height={40} 
            width={40} 
            alt='ImageAvatar' 
            priority 
            className='h-auto'
        />
        <button 
            className='btn bg-pink-600 text-white' 
            onClick={async() => await authClient.signOut()}
        >
            Log out
        </button>
    </div>
) : (
    <button className='btn bg-pink-600 text-white'>
        <Link href={'/login'}>Login</Link>
    </button>
)}
        </div>
    );
};

export default Navbar;