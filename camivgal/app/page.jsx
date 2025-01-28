import Image from 'next/image';
import footer from '@/public/img/Footer.webp';


export default function Home() {
    return (
        <main className='space-y-8'>
            <section 
                className='footer bg-cover bg-center flex items-center justify-center font-serif'
                style={{ 
                    backgroundImage: `url(${footer.src})`, 
                    height: '400px'
                }}
            >
                <p className='text-3xl text-white text-center leading-relaxed font-bold animate-scan'>
                    Bienvenue chez Camivgal, pour découvrir le Cameroun, la Côte d'Ivoire et le Sénégal !
                </p>
            </section>

            <section className='nos-services py-8 bg-gray-100'>
                <h2 className='text-2xl font-bold text-center mb-4'>Nos Services</h2>
                <div className='flex flex-wrap justify-center space-x-4'>
                    <div className='service-card p-4 bg-white shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Culture du Cameroun</h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                    <div className='service-card p-4 bg-white shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Culture de la cote d'Ivoire</h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                    <div className='service-card p-4 bg-white shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Culture du Senegal</h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                </div>
            </section>

            <section className='nos-circuits py-8 bg-white'>
                <h2 className='text-2xl font-bold text-center mb-4'>Nos Circuits</h2>
                <div className='flex flex-wrap justify-center space-x-4'>
                    <div className='circuit-card p-4 bg-gray-100 shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Circuit au Cameroun</h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                    <div className='circuit-card p-4 bg-gray-100 shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Circuit en cote d'Ivoire</h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                    <div className='circuit-card p-4 bg-gray-100 shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Circuit au Senegal</h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                </div>
            </section>

            <section className='tourisme py-8 bg-gray-50'>
                <h2 className='text-2xl font-bold text-center mb-4'>Tourisme</h2>
                <div className='flex flex-wrap justify-center space-x-4'>
                    <div className='tourisme-card p-4 bg-white shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Tourisme au Cameroun</h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                    <div className='tourisme-card p-4 bg-white shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Tourisme en cote d'Ivoire</h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                    <div className='tourisme-card p-4 bg-white shadow-md rounded-md w-64 text-center'>
                        <h3 className='text-xl font-semibold mb-2'>Tourisme au Senegal </h3>
                        <p className='text-gray-600'>Description .</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
