import type { Metadata } from 'next';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/TwoColumn';
import Contact from '@/components/Contact';

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
        <TwoColumnMain>ダミー</TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
