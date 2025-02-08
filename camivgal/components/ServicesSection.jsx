import React from 'react';

     {/* composant reutilisable pour la definition des sections de la page d'accueil*/}
const ServicesSection = ({ title, services, className = 'py-10 bg-white' }) => {
    return (
        <section className={`nos-services ${className}`} >
            <h2 className='text-2xl font-bold text-center mb-4'>{title}</h2>
            
            <div className='flex flex-wrap justify-center gap-6'>
                {services.map((service, index) => (
                    <div key={index} className='service-card p-4 shadow-md rounded-md w-64 text-center text-white flex items-end justify-center' 
                        style={{ 
                            backgroundImage: `url(${service.image.src})`, 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '300px',
                            width:'350px'
                        }}>
                        <div className="bg-black bg-opacity-50 w-full p-4 rounded-b-md">
                            <h3 className='text-xl font-semibold'>{service.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
