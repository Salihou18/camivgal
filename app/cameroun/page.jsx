import Cameroun from '@/components/Cameroun';
export const metadata = {
  metadataBase: new URL('http://acme.com'),

  title: 'cameroun | Camivgal',
  description: 'Page cameroun',
  openGraph: {
    title: 'cameroun | Camivgal',
    description: 'Page cameroun ',
    images: ['./react.webp'],
  },
};
export default function Page() {
  return <Cameroun />;
}