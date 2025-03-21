import Activites from '@/components/Activites';
export const metadata = {
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
