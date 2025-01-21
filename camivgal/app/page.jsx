import Image from 'next/image';
import footer from '@/public/img/Footer.webp' 
import Document from '@/components/Document';

export default function Home() {
    return (
        <main>
             <div className='footer bg-cover bg-center' style={{ backgroundImage: `url(${footer.src})` , height: '400px' }}>
                <div className=" flex items-center justify-center w-full h-full  font-serif  " >
                    <p className='text-xl text-white'> Bienvenue chez Camivgal, pour découvrir le Cameroun, la Cote D'Ivoire et le Sénégal!</p> 
                    
            </div>
        </div>
        </main>
    );
}
