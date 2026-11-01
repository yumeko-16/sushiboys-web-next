import type { Metadata } from 'next';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Contact from '@/components/Contact/Contact';

export const metadata: Metadata = {
  title: 'Discography',
  description:
    'SUSHIBOYSが世に送り出した楽曲情報を余すことなくお届けいたします。ぜひご視聴ください。',
  openGraph: {
    title: 'Discography - SUSHIBOYS',
    description:
      'SUSHIBOYSが世に送り出した楽曲情報を余すことなくお届けいたします。ぜひご視聴ください。',
  },
  alternates: {
    canonical: '/discography',
  },
};

export default function Page() {
  return (
    <Container>
      <Hero heading="Discography" subHeading="兵装記録" />

      <TwoColumn>
        <TwoColumn.Main>ダミー</TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
}
