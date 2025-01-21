import footer from '@/public/img/Footer.webp' 



function Footer() {
    return (
        <div className='footer bg-cover bg-center' style={{ backgroundImage: `url(${footer.src})`, height: '400px' }}>
            <div className="flex items-center justify-center w-full h-full font-serif">
                <p className='text-3xl text-white text-center leading-relaxed font-bold animate-scan'>
                    Bienvenue chez Camivgal, pour découvrir le Cameroun, la Cote D'Ivoire et le Sénégal!
                </p>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <main>
            <div className='flex flex-col space-y-8 '>
             <div className='footer bg-cover bg-center' style={{ backgroundImage: `url(${footer.src})` , height: '400px' }}>
                <div className=" flex items-center justify-center w-full h-full  font-serif  " >

                    <p className='text-3xl text-white text-center leading-relaxed font-bold animate-scan'> Bienvenue chez Camivgal, pour découvrir le Cameroun, la Cote D'Ivoire et le Sénégal!</p> 
                    
                </div>
             </div>
             </div>
    
            <div className='flex flex-col space-y-8'>
                <Footer />
            </div>
        </main>

    );
}
