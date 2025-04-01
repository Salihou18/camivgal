import React from 'react';

const DivDesPages = ({ img, text, isImageLeft }) => {
return (
        
        <section className={`flex items-center justify-between w-full my-6 px-10 ${isImageLeft ? '' : 'flex-row-reverse'}`}>
            {/* si isImageLeft est true l'image sera a gauche et le texte a droite */}
           
            {/* Image */}
            <div 
                className="w-[350px] h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            ></div>

            {/* Texte */}
            <div className="w-[950px] h-[300px] flex items-center justify-center p-6  shadow-lg rounded-lg">
            <p className=" text-sm sm:text-base md:text-lg lg:text-xl">{text}</p>

            </div>
        </section>
    );
};

export default DivDesPages;
