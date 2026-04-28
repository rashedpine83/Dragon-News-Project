import Image from 'next/image';
import Link from 'next/link';
import ImageAvatar from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-5'>
            <div></div>
             <ul className='flex justify-between items-center gap-4 text-gray-600'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <div className='flex justify-between gap-4'>
                <Image src={ImageAvatar} height={40} width={40} alt='ImageAvatar' priority className='h-auto'></Image>
                <button className='btn bg-pink-600 text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;