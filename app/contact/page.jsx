import Contact from '@/components/Contact';
export const metadata = {
  metadataBase: new URL('http://acme.com'),

  title: 'contact | Camivgal',
  description: 'Page contact',
  openGraph: {
    title: 'contact | Camivgal',
    description: 'Page contact',
    images: ['./react.webp'],
  },
};
export default function Page() {
  return <Contact />;
}
