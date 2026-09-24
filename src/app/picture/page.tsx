import type { Metadata } from 'next';
import Container from '@/_components/Container';
import Hero from '@/_components/Hero';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Sheet from '@/_components/Sheet';
import PictureList from '@/_components/PictureList';
import Contact from '@/_components/Contact';

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
    <Container>
      <Hero heading="Picture" subHeading="視覚資料" />

      <TwoColumn>
        <TwoColumnMain>
          <Sheet>
            <PictureList />
          </Sheet>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
