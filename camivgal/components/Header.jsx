import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import logo from '@/public/img/Logo.webp' 

export default function Header(){
    return <header>
    <nav className="flex items-center justify-between px-5 py-1 bg-gray-25 shadow-md relative">
      {/* Menu burger visible uniquement sur mobile */}
      <IoMdMenu className="text-2xl md:hidden" />
        <Image
            src={logo}
            alt='Logo'
            width={80}
        />
        <ul className="hidden md:flex justify-center gap-x-10 px-10 flex-grow ">
            <li><button className="text-gray-700 hover:text-blue-500 active:text-green-500">Accueil</button></li>
            <li><button className="text-gray-700 hover:text-blue-500 active:text-green-500">Activités</button></li>
              {/* Contact avec menu déroulant */}
              <li className="relative group">   
                 <button className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                            Contact
                            {/* Flèche à droite */}
                            <span className="ml-2 text-sm"><IoIosArrowDown /></span>
                        </button>
                        {/* Menu déroulant */}
                        <ul className="absolute left-0 hidden mt-0 space-y-2 bg-white shadow-lg group-hover:block">
                            <li>
                                <button className="block px-4 py-2 text-gray-700 hover:bg-blue-100">A propos de nous</button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Formulaire de réservation</button>
                            </li>
                        </ul>
                    </li> 
             {/* Cameroun avec menu déroulant */}
             <li className="relative group">   
                 <button className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                            Cameroun
                            {/* Flèche à droite */}
                            <span className="ml-2 text-sm"><IoIosArrowDown /></span>
                        </button>
                        {/* Menu déroulant */}
                        <ul className="absolute left-0 hidden mt-0 space-y-2 bg-white shadow-lg group-hover:block">
                            <li>
                                <button className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Douala</button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Yaoundé</button>
                            </li>
                        </ul>
                    </li>
                       {/* Sénégal avec menu déroulant */}
             <li className="relative group">  
                {/* Bouton principal */}  
                <button className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                        Sénégal
                            {/* Flèche à droite */}
                            <span className="ml-2 text-sm"><IoIosArrowDown /></span>
                        </button>
                        {/* Menu déroulant */}
                        <ul className="absolute left-0 hidden mt-0 space-y-2 bg-white shadow-lg group-hover:block group-focus-within: ">
                            <li>
                                <button className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Dakar</button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Touba</button>
                            </li>
                        </ul>
                    </li>
        </ul>
    </nav>
</header>

}
