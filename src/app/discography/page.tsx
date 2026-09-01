import type { Metadata } from 'next';
import Hero from '@/_components/Hero';
import Container from '@/_components/Container';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Contact from '@/_components/Contact';
import styles from './page.module.scss';

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
    <>
      <Hero heading="Discography" subHeading="兵装記録" />

      <Container>
        <TwoColumn>
          <TwoColumnMain>ダミー</TwoColumnMain>

          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
