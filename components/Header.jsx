'use client';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar'; // Import du nouveau composant
import Image from 'next/image';
import logo from '@/public/img/Logo.webp';
import { IoSunny } from 'react-icons/io5';
import { IoMdMoon } from 'react-icons/io';
import { useMyContext } from '@/provider/MyContextProvider';
import Link from 'next/link';
import i18next from 'i18next';
import { useState } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useMyContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-gray p-4 relative">
      <nav className="flex justify-center items-center">
        {/* Logo */}
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image src={logo} alt="Logo" width={80} className="cursor-pointer" />
        </Link>

        {/* Menu burger (mobile) */}
        <button
          className="md:hidden ml-4 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* NavBar Desktop  */}
        <div className="hidden md:block flex-grow justify-center">
          <NavBar />
        </div>

        {/* Menu Mobile - Utilisation de MobileNavBar */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="container mx-auto px-4 pt-2 pb-6">
              <MobileNavBar onItemClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}

        {/* Thème et langue */}
        <button className="ml-auto text-2xl" onClick={toggleTheme}>
          {theme === 'light' ? <IoMdMoon /> : <IoSunny />}
        </button>

        <select
          onChange={(e) => i18next.changeLanguage(e.target.value)}
          defaultValue={i18next.language}
          className="text-black"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="sp">SP</option>
        </select>
      </nav>
    </header>
  );
}
