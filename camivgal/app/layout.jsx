'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import './globals.css';
import MyContextProvider from '@/provider/MyContextProvider';
import Body from '@/components/Body';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyContextProvider>
        {' '}
        <Body children={children} />
      </MyContextProvider>
    </html>
  );
}
