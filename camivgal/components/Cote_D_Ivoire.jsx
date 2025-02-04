export default function CoteIvoire() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Titre */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                Découvrez la Côte d'Ivoire !
            </h1>

            {/* Image principale */}
            <div className="flex justify-center">
                <img
                    src="/img/Cote_Ivoire.webp" 
                    alt="Paysage de Côte d'Ivoire"
                    className="w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
                />
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-center">
                La Côte d'Ivoire, joyau de l'Afrique de l'Ouest, est réputée pour ses plages exotiques, 
                sa riche culture et ses traditions ancestrales. Explorez ses paysages variés, 
                entre montagnes, forêts tropicales et villes dynamiques.
            </p>

            {/* Liste des sites touristiques */}
            <h2 className="text-2xl font-semibold text-gray-700 mt-6">Lieux incontournables :</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                <li>🏝️ <b>Assinie</b> -Station balnéaire prisée pour ses plages paradisiaques et ses lagunes.</li>
                <li>🌳 <b>Parc National de Taï</b> - Une réserve exceptionnelle pour observer la faune sauvage.</li>
                <li>🏛️ <b>La Basilique de Yamoussoukro</b> - Un édifice impressionnant, inspiré de la basilique Saint-Pierre de Rome.</li>
                <li>🧺 <b>Le marché de Treichville</b> - Un lieu incontournable pour découvrir l’artisanat ivoirien.</li>
            </ul>

            {/* Liens externes */}
            <div className="mt-6">
                <p className="text-gray-700 font-semibold">Pour en savoir plus :</p>
                <a
                    href="https://tourismecotedivoire.ci/wp-content/uploads/guide_de_voyage_tourisme_cotedIvoire.pdf"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                >
                    Guide de voyage Côte d'Ivoire.
                </a>
            </div>

            {/* Bouton d'exploration */}
            <div className="flex justify-center mt-6">
                <a
                    href="#"
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-orange-700 transition"
                >
                    Explorer plus de sites
                </a>
            </div>
        </div>
    );
}
