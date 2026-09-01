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
