import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
    title: 'Camivgal',
    description: 'decouverte du Cameroun, de la Cote D Ivoire et du Sénégal',
};
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
          
        <body className={inter.className}>
        
           <Header />
            
            {children}
            
            <Footer />
            
        </body>

        </html>
    );
}
