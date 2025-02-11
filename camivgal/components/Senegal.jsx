import DivDesPages from "./DivDesPages";
import Image from "next/image";




export default function Contact() {
    return (
        <div> 
        <div className="relative w-full h-[90vh]">
            {/* Image en arrière-plan */}
            <img 
                src="/img/Senegal.webp" 
                alt="Image du Sénégal" 
                className="w-full h-full object-cover"
            />

            {/* Superposition sombre */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Texte superposé */}
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
                <h3 className="text-lg font-light">Guide</h3>
                <h1 className="text-6xl font-bold">Sénégal</h1>
                
            </div>
        </div>

        <div className="p-10 bg-gradient-to-r from-blue-500 to-white-400 text-black">
                <h2 className="text-4xl font-bold mb-5 text-center font-serif animate-fade-in">
                    Découvrez le Sénégal
                </h2>
                <p className="text-lg text-center max-w-2xl mx-auto leading-relaxed font-light animate-slide-up">
                    Le Sénégal, <span className="font-semibold text-yellow-300">perle de l'Afrique de l'Ouest</span>, est un pays aux mille visages. Entre ses <span className="italic">plages immaculées</span>, ses <span className="italic">villes animées</span> et ses <span className="italic">paysages sauvages</span>, il offre une expérience unique. Explorez <span className="font-semibold">Dakar</span>, la capitale vibrante, plongez dans l'histoire émouvante de l'<span className="font-semibold">île de Gorée</span>, ou laissez-vous enchanter par la <span className="font-semibold">Teranga</span>, l'hospitalité légendaire des Sénégalais. Le Sénégal, c'est une invitation au voyage, à la découverte et à l'émerveillement.
                </p>
            </div>

        {/* Section avec image et texte */}
        <div>
            {/* image à gauche et le texte à droite */}
            <DivDesPages 
                img="/img/DakarVille.webp" 
                text="Dakar, capitale du Sénégal, est une ville vibrante et culturellement riche, alliant modernité et traditions. Ouverte sur l’océan Atlantique, elle offre des plages animées comme la Corniche et des sites emblématiques tels que l’île de Gorée, classée à l’UNESCO, et le Monument de la Renaissance Africaine, offrant une vue panoramique. Ses marchés colorés (Sandaga, Kermel) et ses espaces verts (parc de Hann) reflètent son dynamisme, tandis que sa musique, sa gastronomie et l’hospitalité légendaire des Sénégalais (la 'Teranga') en font une destination incontournable. Dakar, c’est une expérience sensorielle et culturelle unique."
                isImageLeft={true} // Position de l'image à gauche
            />

            {/* image à droite et le texte à gauche */}
            <DivDesPages 
                img="/img/Goree_Island.webp" 
                text="Île de Gorée Perle historique au large de Dakar, Gorée est un symbole poignant de la traite transatlantique, avec la Maison des Esclaves et sa 'Porte du Voyage sans Retour'. Aujourd'hui, ses ruelles colorées et son atmosphère paisible en font un lieu de mémoire et de réconciliation, alliant histoire et beauté. " 
                isImageLeft={false} // Position de l'image à droite
            />
            </div>
        </div>
    );
}
