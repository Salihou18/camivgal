import React from 'react';

const DivDesPages = ({ img, text }) => {
    return (
        <section className="flex items-center justify-between w-full my-6 px-10">
            {/* Image à gauche */}
            <div 
                className="w-[350px] h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            >
            </div>

            {/* Texte à droite */}
            <div className="w-[950px] h-[300px] flex items-center justify-center p-6 bg-gray-100 shadow-lg rounded-lg">
                <p className="text-gray-800 text-lg">{text}</p>
            </div>
        </section>
    );
};

export default DivDesPages;
