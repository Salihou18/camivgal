"use client";
import { IoIosArrowDown } from "react-icons/io";
export default function NavBar({ changePage }) {
 return (

        <ul className="hidden md:flex justify-center gap-x-10 px-10 flex-grow ">
            <li><button onClick={() => changePage("home")}  className="text-gray-700 hover:text-blue-500 active:text-green-500">  Accueil</button></li>
            <li><button onClick={() => changePage("activites")}  className="text-gray-700 hover:text-blue-500 active:text-green-500">  Activités</button></li>
              {/* Contact avec menu déroulant */}
              <li className="relative group">   
                 <button  className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center"> 
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
                 <button  onClick={() => changePage("cameroun")} className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                   Cameroun
                            
                        </button>
                      
                    </li>
                    {/* Cote D'Ivoire avec menu déroulant */}
                    <li className="relative group">  
                {/* Bouton principal */}  
                <button onClick={() => changePage("cote")} className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                Cote D'Ivoire
                           
                        </button>
                       
                    </li>
                       {/* Sénégal avec menu déroulant */}
             <li className="relative group">  
                {/* Bouton principal */}  
                <button onClick={() => changePage("senegal")} className="text-gray-700 hover:text-blue-500 active:text-green-500 flex items-center">
                 Sénégal
                            
                        </button>
                       
                </li>
        </ul>
    
 );
}
