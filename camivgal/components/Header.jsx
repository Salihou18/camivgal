import { IoMdMenu } from "react-icons/io";
import Image from 'next/image';
import logo from '@/public/img/react.webp' 

export default function Header(){
    return <header>
    <nav >
        <IoMdMenu className= "md:hidden"/>
        <Image
            src={logo}
            alt='Logo React'
            width={80}
        />
        <ul>
            <li><a href='#'>Accueil</a></li>
            <li><a href='#'>Documents</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Connexion</a></li>
        </ul>
    </nav>
</header>

}