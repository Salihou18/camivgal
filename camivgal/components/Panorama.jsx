import React from "react";
import Image from "next/image";
const Panorama = ({ images }) => {
    if (!images || images.length === 0) {
        return <p className="text-center text-gray-500">Aucune image à afficher.</p>;
    }

    return (
        <div className="w-full flex justify-center mt-10">
            <div 
                className="grid gap-2" 
                style={{ 
                    gridTemplateColumns: `repeat(${Math.min(images.length, 7)}, 1fr)` 
                }}
            >
                {images.map((src, index) => (
                    <img 
                        key={index} 
                        src={src} 
                        width="100" 
                        height="50" 
                        alt={`Image ${index}`} 
                        className="object-cover rounded-md shadow-md"
                    />
                ))}
            </div>
        </div>
    );
};

export default Panorama;


