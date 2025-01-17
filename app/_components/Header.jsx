'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const socialLinks = [
    { href: 'https://location.com', iconClass: 'fas fa-map-marker-alt pr-1', text: "XYZ City, 12345" },
    { href: 'https://facebook.com', iconClass: 'fab fa-facebook-f' },
    { href: 'https://twitter.com', iconClass: 'fab fa-twitter' },
    { href: 'https://linkedin.com', iconClass: 'fab fa-linkedin-in' },
    { href: 'https://instagram.com', iconClass: 'fab fa-instagram' },
    { href: 'https://youtube.com', iconClass: 'fab fa-youtube' },

];
const HeaderTop = ({ phoneNumber, email, socialLinks }) => {
    return (
        
        <div className="py-2 border-b ">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Left Section (Social Icons) */}
                    <div className="flex items-center space-x-4 text-center lg:text-right">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                className="text-gray-600 hover:text-custom-hover text-sm lg:text-base"
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={link.iconClass}></i>
                                {link.text}
                            </a>
                        ))}
                    </div>
                    {/* Right Section (Contact Info) */}
                    <div className="flex flex-wrap items-center space-x-4 text-center lg:text-left lg:mb-0">
                        <a className="text-gray-600 hover:text-custom-hover text-sm lg:text-base" href={`tel:${phoneNumber}`}>
                            <i className="bi bi-telephone mr-2"></i>{phoneNumber}
                        </a>
                        <span className="text-gray-600">|</span>
                        <a className="text-gray-600 hover:text-custom-hover text-sm lg:text-base" href={`mailto:${email}`}>
                            <i className="bi bi-envelope mr-2"></i>{email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};



const Header = () => {
    const Menu = [
        { id: 1, name: "Home", path: '/' },
        { id: 2, name: "About", path: '/#about' },
        { id: 3, name: "Services", path: '/#services' },
        { id: 4, name: "Contact Us", path: '/#contact' },

    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        < div className='header'>
            
            <HeaderTop
                phoneNumber="+012 345 6789"
                email="info@example.com"
                socialLinks={socialLinks}
            />
            <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-[#00000042] shadow-sm ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                    <a href="../" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src='/logo.png' width={150} height={100} style={{ objectFit: 'contain' }} alt="Logo" />

                    </a>
                    <div className="flex items-center md:order-1 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-2 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {Menu.map((menuItem) => (
                                <li key={menuItem.id} className='self-center '>
                                    <Link href={menuItem.path} className="transition-all hover:scale-110 ase-in-out block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-hover md:p-0 dark:text-white md:dark:hover:text-custom-hover dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        {menuItem.name}
                                    </Link>
                                </li>
                            ))}
                            <Button >Book Appointment</Button>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        
        </div>
    );

};

export default Header;
