import Accueil from './Accueil';

export const metadata = {
  metadataBase: new URL('http://acme.com'),
  title: 'Camivgal | Accueil',
  description:
    'Site web présentant les sites touristiques de trois différents pays africains.',
  openGraph: {
    title: 'Camivgal | Accueil',
    description: 'Découverte du Cameroun, Sénégal, Côte d’Ivoire.',
    images: ['./react.webp'],
  },
  manifest: '/manifest.json',
};

export default function Page() {
  return <Accueil />;
}
