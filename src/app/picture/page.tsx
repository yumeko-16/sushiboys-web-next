import type { Metadata } from 'next';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Sheet from '@/components/Sheet/Sheet';
import PictureList from '@/components/PictureList/PictureList';
import Contact from '@/components/Contact/Contact';

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
        <TwoColumn.Main>
          <Sheet>
            <PictureList />
          </Sheet>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
}
