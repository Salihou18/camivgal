'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import './globals.css';
import MyContextProvider from '@/provider/MyContextProvider';
import Body from '@/components/Body';
//NEw
import { appWithTranslation } from 'next-i18next';
//TRES IMPORTANT
import i18n from '@/i18next';

export const metadata = {
  title: 'Camivgal | Accueil',
  description:
    'Site web présentant les sites touristiques de trois diferrents pays africains.',
  openGraph: {
    title: 'Camivgal | Accueil',
    description:
      'Site web présentant les sites touristiques de trois diferrents pays africains .',
    images: ['./react.webp'],
  },
};


const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyContextProvider>
        {' '}
        <Body children={children} />
      </MyContextProvider>
    </html>
  );
  
}

//NEW
// Pour activer la traduction
export default appWithTranslation(RootLayout);
