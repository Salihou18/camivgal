import Image from 'next/image';

export default function CoteIvoire() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Titre */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                Découvrez la Côte d'Ivoire !
            </h1>

            {/* Image principale */}
            <div className="flex justify-center">
                <Image
                    src="/img/Cote_dIvoire.webp"
                    alt="Paysage de Côte d'Ivoire"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    priority
                />
            </div>

            {/* Description générale */}
            <p className="mt-4 text-gray-600 text-center">
                La Côte d'Ivoire est un pays riche en diversité culturelle et en paysages époustouflants. 
                Des plages idylliques aux parcs nationaux luxuriants, en passant par des monuments historiques impressionnants, 
                chaque région offre une expérience unique aux visiteurs.
            </p>

            {/* Liste des sites touristiques avec images alignées horizontalement */}
            <h2 className="text-2xl font-semibold text-gray-700 mt-6">Lieux incontournables :</h2>
            <div className="mt-4 space-y-6">
                
                {/* Assinie */}
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4">
                    <Image 
                        src="/img/assinie.webp" 
                        alt="Plage d'Assinie" 
                        width={300} 
                        height={200} 
                        className="rounded-lg"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0">
                        <h3 className="text-xl font-semibold text-gray-800">🏝️ Assinie</h3>
                        <p className="text-gray-600">
                            Station balnéaire prisée pour ses plages paradisiaques et ses lagunes paisibles. 
                            Assinie est idéale pour la détente et les activités nautiques.
                        </p>
                    </div>
                </div>

                {/* Parc National de Taï */}
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4">
                    <Image 
                        src="/img/parc_tai.webp" 
                        alt="Parc National de Taï" 
                        width={300} 
                        height={200} 
                        className="rounded-lg"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0">
                        <h3 className="text-xl font-semibold text-gray-800">🌳 Parc National de Taï</h3>
                        <p className="text-gray-600">
                            Un site classé UNESCO abritant une biodiversité unique, dont des chimpanzés et des éléphants pygmées.
                        </p>
                    </div>
                </div>

                {/* Basilique de Yamoussoukro */}
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4">
                    <Image 
                        src="/img/basilique_yamoussoukro.webp" 
                        alt="Basilique de Yamoussoukro" 
                        width={300} 
                        height={200} 
                        className="rounded-lg"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0">
                        <h3 className="text-xl font-semibold text-gray-800">🏛️ Basilique de Yamoussoukro</h3>
                        <p className="text-gray-600">
                            Inspirée de la basilique Saint-Pierre de Rome, elle est la plus grande basilique du monde 
                            et un chef-d'œuvre architectural.
                        </p>
                    </div>
                </div>

                {/* Marché de Treichville */}
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4">
                    <Image 
                        src="/img/marche_treichville.webp" 
                        alt="Marché de Treichville" 
                        width={300} 
                        height={200} 
                        className="rounded-lg"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0">
                        <h3 className="text-xl font-semibold text-gray-800">🧺 Marché de Treichville</h3>
                        <p className="text-gray-600">
                            Un marché animé à Abidjan, parfait pour découvrir l'artisanat ivoirien, les tissus et les spécialités locales.
                        </p>
                    </div>
                </div>

            </div>

            {/* Liens externes */}
            <div className="mt-6">
                <p className="text-gray-700 font-semibold"> Consultez ce guide pour en savoir plus sur le tourisme en Côte d'Ivoire :</p>
                <a
                    href="https://tourismecotedivoire.ci/wp-content/uploads/guide_de_voyage_tourisme_cotedIvoire.pdf"
                    target="_blank"
                    className="text-blue-600 hover:underline font-bold"
                >
                    📥 Télécharger le Guide de Voyage Côte d'Ivoire
                </a>
            </div>

            {/* Bouton d'exploration */}
            <div className="flex justify-center mt-6">
                <a
                    href="https://discover-ivorycoast.com/les-attractions/"
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-orange-700 transition"
                >
                    Explorer plus de sites
                </a>
            </div>
        </div>
    );
}
