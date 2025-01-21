import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Camivgal_app',
  description: 'Découvrir les sites touristiques.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
