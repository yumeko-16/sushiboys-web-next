import type { Metadata } from 'next';
import Hero from '@/_components/Hero';

export const metadata: Metadata = {
  title: 'Picture',
  description: 'SUSHIBOYSの写真集を掲載しています。',
  openGraph: {
    title: 'Picture - SUSHIBOYS',
    description: 'SUSHIBOYSの写真集を掲載しています。',
  },
  alternates: {
    canonical: '/picture',
  },
};

export default function Page() {
  return (
    <>
      <Hero heading="Picture" subHeading="視覚資料" />
    </>
  );
}
