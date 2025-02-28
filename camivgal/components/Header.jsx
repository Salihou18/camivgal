import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import NavBar from "./NavBar";
import Image from 'next/image';
import logo from '@/public/img/Logo.webp' 

export default function Header({changePage}){
    return  (<header>
    <nav className="flex bg-gray-100 items-center justify-between px-5 py-1 bg-gray-25 shadow-md relative">
      {/* Menu burger visible uniquement sur mobile */}
      <IoMdMenu className="text-2xl md:hidden" />
        <Image
            src={logo}
            alt='Logo'
            width={80}
        />
        <NavBar changePage={changePage}/>
        </nav>
</header>
);
}
