export default function Footer() {
    return (
        <footer className="bg-black text-center p-4 , mt-21">

        
            <nav>
                <ul className="flex justify-center items-center flex-wrap gap-4 list-none p-0 m-0">
                    <li><a href="#" className="text-white font-bold hover:text-gray-400">À propos</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-400">Événements</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-400">Visites</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-400">Contactez-nous</a></li>
                </ul>
            </nav>
            <p className="mt-4 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Camivgal. Tous droits réservés.
            </p>
        </footer>
    );
}
