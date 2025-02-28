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

export default function RootLayout({ children }) {
    const [page, setPage] = useState("home");

    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen">
                    <Header changePage={setPage} />
                     <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
