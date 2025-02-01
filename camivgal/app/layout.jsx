"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { useState } from "react";
import './globals.css';
import Activites from "@/components/Activites";
import Cameroun from "@/components/Cameroun";
import Contact from "@/components/Contact";
import Cote_D_Ivoire from "@/components/Cote_D_Ivoire";
import Senegal from "@/components/Senegal";

const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//     title: 'Camivgal',
//     description: 'decouverte du Cameroun, de la Cote D Ivoire et du Sénégal',
// };
export default function RootLayout({ children }) {
    const [page, setPage] = useState("home");

    return (
        <html lang='en'>  
        <body className={inter.className}>
           <Header  changePage={setPage} />
           <main className="flex-1 ">
                { page === "activites" ? (
                <Activites />
                ) : page === "contact" ? (
                <Contact />
                ) : page === "cameroun" ? (
                <Cameroun />
                ) :  page === "cote" ? (
                    <Cote_D_Ivoire />
                ):
                page === "senegal" ? (
                    <Senegal /> 
                ) : (
                    children // Affiche `children` seulement si aucune autre page n'est sélectionnée
                )}
               
            </main>
                  
            <Footer />           
        </body>
        </html>
    );
}
