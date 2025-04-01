import { IoMdMenu } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import NavBar from './NavBar';
import Image from 'next/image';
import logo from '@/public/img/Logo.webp';
import { IoSunny } from 'react-icons/io5';
import { IoMdMoon } from 'react-icons/io';
import { useMyContext } from '@/provider/MyContextProvider';
//NEW
import i18next from 'i18next';
export default function Header({ changePage }) {
  const { theme, toggleTheme } = useMyContext();
  return (
    <header>
      <nav className="flex items-center justify-between px-5 py-1 bg-gray-25 shadow-md relative">
        {/* Menu burger visible uniquement sur mobile */}
        <IoMdMenu className="text-2xl md:hidden" />
        <Image src={logo} alt="Logo" width={80} />
        <NavBar changePage={changePage} />
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
