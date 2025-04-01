import Cote_D_Ivoire from '@/components/Cote_D_Ivoire';
export const metadata = {
  metadataBase: new URL('http://acme.com'),

  title: 'civ | Camivgal',
  description: 'Page cote d ivoire',
  openGraph: {
    title: 'civ | Camivgal',
    description: 'Page cote d ivoire ',
    images: ['./react.webp'],
  },
};

export default function Page() {
  return <Cote_D_Ivoire />;
}
