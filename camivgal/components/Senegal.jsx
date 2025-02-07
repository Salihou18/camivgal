export default function Contact() {
    return (
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
    );
}
