import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import logo from '@/public/img/Logo.webp' 

export default function Header(){
    return <header>
    <nav className="flex items-center justify-between px-40 py-3 bg-gray-25 shadow-md relative">
      {/* Menu burger visible uniquement sur mobile */}
      <IoMdMenu className="text-2xl md:hidden" />
        <Image
            src={logo}
            alt='Logo'
            width={80}
        />
        <ul className="hidden md:flex justify-center gap-x-10 px-80 ">
            <li><a href='#' className="text-gray-700 hover:text-blue-500 active:text-green-500">Accueil</a></li>
            <li><a href='#'className="text-gray-700 hover:text-blue-500 active:text-green-500">Activités</a></li>
              {/* Contact avec menu déroulant */}
              <li className="relative group">    <a href="#" className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                            Contact
                            {/* Flèche à droite */}
                            <span className="ml-2 text-sm"><IoIosArrowDown /></span>
                        </a>
                        {/* Menu déroulant */}
                        <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg group-hover:block">
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">A propos de nous</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Formulaire de réservation</a>
                            </li>
                        </ul>
                    </li> 
             {/* Cameroun avec menu déroulant */}
             <li className="relative group">    <a href="#" className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                            Cameroun
                            {/* Flèche à droite */}
                            <span className="ml-2 text-sm"><IoIosArrowDown /></span>
                        </a>
                        {/* Menu déroulant */}
                        <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg group-hover:block">
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Douala</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Yaoundé</a>
                            </li>
                        </ul>
                    </li>
              {/* Cote D'Ivoire avec menu déroulant */}
              <li className="relative group">    <a href="#" className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                    Cote D'Ivoire
                            {/* Flèche à droite */}
                            <span className="ml-2 text-sm"><IoIosArrowDown /></span>
                        </a>
                        {/* Menu déroulant */}
                        <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg group-hover:block">
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Douala</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Yaoundé</a>
                            </li>
                        </ul>
                    </li>
                       {/* Sénégal avec menu déroulant */}
             <li className="relative group">    <a href="#" className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                        Sénégal
                            {/* Flèche à droite */}
                            <span className="ml-2 text-sm"><IoIosArrowDown /></span>
                        </a>
                        {/* Menu déroulant */}
                        <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg group-hover:block">
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Douala</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Yaoundé</a>
                            </li>
                        </ul>
                    </li>
        </ul>
    </nav>
</header>

}