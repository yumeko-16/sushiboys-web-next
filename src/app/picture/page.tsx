import type { Metadata } from 'next';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/TwoColumn';
import Sheet from '@/components/Sheet';
import PictureList from '@/components/PictureList';
import Contact from '@/components/Contact';

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
