import Activites from '@/components/Activites';
import { m } from 'framer-motion';

export const metadata = {
  metadataBase: new URL('http://acme.com'),
  title: 'activites | Camivgal',
  description: 'Page de Connexion',
  openGraph: {
    title: 'activites | Camivgal',
    description: 'Page pour les activites ',
    images: ['./react.webp'],

  },
};

export default function Page() {
  return <Activites />;
}
