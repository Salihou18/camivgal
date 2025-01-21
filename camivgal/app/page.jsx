import Image from 'next/image';
import Footer from '@/components/Footer';
import footer from '@/public/img/Footer.webp' 
import Document from '@/components/Document';


export default function Home() {
    return (
        <main>
            <div className='flex flex-col space-y-8 '>
             <div className='footer bg-cover bg-center' style={{ backgroundImage: `url(${footer.src})` , height: '400px' }}>
                <div className=" flex items-center justify-center w-full h-full  font-serif  " >

                    <p className='text-xl text-white'> Bienvenue chez Camivgal, pour découvrir le Cameroun, la Cote D'Ivoire et le Sénégal!</p> 
                    
            </div>
        </div>

                    <pre className='text-3xl text-white text-center leading-relaxed font-bold animate-scan '> Bienvenue chez Camivgal pour découvrir <br /> Cameroun, Cote D'Ivoire, Sénégal!</pre> 
                </div>


             </div>
            
            

             </div>


        </main>

    );
}
