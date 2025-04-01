'use client';
import Image from 'next/image';
import footer from '@/public/img/Footer.webp';
import girrafe from '@/public/img/Girrafe.webp';
import Monument_de_la_Reunification from '@/public/img/Monument_de_la_Reunification.webp';
import monument_de_la_renaissance_africaine from '@/public/img/monument_de_la_renaissance_africaine.webp';
import CircuitCam from '@/public/img/CircuitCam.webp';
import CircuitSen from '@/public/img/CircuitSen.webp';
import CircuitCiv from '@/public/img/CircuitCiv.webp';
import TourismeCam from '@/public/img/TourismeCam.webp';
import TourismeSen from '@/public/img/TourismeSen.webp';
import TourismeCiv from '@/public/img/TourismeCiv.webp';
import ServicesSection from '../components/ServicesSection';

import { useMyContext } from '@/provider/MyContextProvider';

export const metadata = {
  metadataBase: new URL ('http://acme.com'),
  title: 'Camivgal | Accueil',
  description:
    'Site web présentant les sites touristiques de trois diferrents pays africains.',
  openGraph: {
    title: 'Camivgal | Accueil',
    description:
      'Site web présentant les sites touristiques de trois diferrents pays africains .',
    images: ['./react.webp'],
  },
};

export default function Home() {
  const { theme } = useMyContext();

  const services = [
    { title: 'Culture du Cameroun', image: Monument_de_la_Reunification },
    { title: "Culture de la Côte d'Ivoire", image: girrafe },
    {
      title: 'Culture du Sénégal',
      image: monument_de_la_renaissance_africaine,
    },
  ];

  const circuits = [
    { title: 'Circuits du Cameroun', image: CircuitCam },
    { title: "Circuits de la Côte d'Ivoire", image: CircuitCiv },
    { title: 'Circuits du Sénégal', image: CircuitSen },
  ];

  const tourisme = [
    { title: 'Tourisme du Cameroun', image: TourismeCam },
    { title: "Tourisme de la Côte d'Ivoire", image: TourismeCiv },
    { title: 'Tourisme du Sénégal', image: TourismeSen },
  ];

  return (
    <main className="space-y-8">
      <section
        className={`footer ${theme === 'light' ? 'bg-gray-500' : 'bg-black'} bg-cover bg-center flex items-center justify-center font-serif`}
        style={{
          // backgroundImage: `url(${footer.src})`,
          height: '400px',
        }}
      >
        <p className="text-3xl text-center leading-relaxed font-bold animate-scan">
          Bienvenue chez Camivgal, pour découvrir le Cameroun, la Côte d'Ivoire
          et le Sénégal !
        </p>
      </section>

      {/*section des services */}
      <ServicesSection title="Nos Services" services={services} />

      {/*section des circuits */}
      <ServicesSection title="Nos Circuits" services={circuits} />

      {/*section pour le tourisme */}
      <ServicesSection title="Tourisme" services={tourisme} />
    </main>
  );
}
