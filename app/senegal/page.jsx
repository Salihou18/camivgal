import Senegal from '@/components/Senegal';
export const metadata = {
  metadataBase: new URL('http://acme.com'),

  title: 'senegal | Camivgal',
  description: 'Page senegal',
  openGraph: {
    title: 'senegal | Camivgal',
    description: 'Page senegal ',
    images: ['./react.webp'],
  },
};
export default function Page() {
  return <Senegal />;
}
