import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import LogoImage from '.../public/logoPic.png';  

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className=' bg-gradient-to-r from-[#1FA8AA] to-[#0D93D4] shadow-md fixed left-0 top-0 w-full z-10'>
            <div className='max-w-7xl mx-auto flex justify-between items-center p-4 text-white font-semibold'>
                <Link href='/' legacyBehavior>
                    <a>
                        <img
                            src='https://i.ibb.co/GVJ9fmH/logoPic.png'
                            alt='Makara Logo'
                            className='h-[4.5rem]'
                        />
                    </a>
                </Link>
                <ul className='hidden sm:flex space-x-4'>
                    <li className=' hover:underline'>
                        <Link href='/#about'>HOME</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='#storage'>TYPE OF STORAGE</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/artists'>SPECIFICATIONS</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/shop'>FEATURE</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/contact'>GALLERY</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/contact'>ABOUT</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/contact'>CONTACT</Link>
                    </li>
                </ul>
                {/* Mobile Button */}
                <div
                    onClick={handleNav}
                    className='sm:hidden cursor-pointer'
                >
                    {nav ? (
                        <AiOutlineClose size={20} className='text-white' />
                    ) : (
                        <AiOutlineMenu size={20} className='text-white' />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center transition-transform duration-300 ease-in'
                            : 'hidden'
                    }
                >
                    <ul className='flex flex-col space-y-4 text-white'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li>
                            <Link href='/exhibition'>Exhibition</Link>
                        </li>
                        <li>
                            <Link href='/artists'>Artists</Link>
                        </li>
                        <li>
                            <Link href='/shop'>Shop</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
