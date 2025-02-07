"use client";
import DivDesPages from "./DivDesPages";

export default function Cameroun() {
    return (
        <div>
            {/* Vidéo en arrière-plan */}
            <div className="relative w-full h-[500px] flex items-center justify-center text-white text-3xl font-bold">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/img/VideoKribi.mp4">
                </video>

                {/* Filtre sombre pour améliorer la lisibilité */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                {/* Contenu au premier plan */}
                <h1 className="relative z-10 text-center p-4">
                    Découvrez le Cameroun!
                </h1>
            </div>

            {/* Section avec image et texte */}
            <DivDesPages 
                img="/img/ArtCameroun.jpg" 
                text="Découvrez les magnifiques paysages du Cameroun." 
            />
        </div>
    );
}
