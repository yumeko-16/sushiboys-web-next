import type { Metadata } from 'next';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Contact from '@/components/Contact/Contact';

export const metadata: Metadata = {
  title: 'Goods',
  description:
    'SUSHIBOYSのグッズ一覧。グッズ購入・商品詳細ページへご案内いたします。',
  openGraph: {
    title: 'Goods - SUSHIBOYS',
    description:
      'SUSHIBOYSのグッズ一覧。グッズ購入・商品詳細ページへご案内いたします。',
  },
  alternates: {
    canonical: '/goods',
  },
};

export default function Page() {
  return (
    <Container>
      <Hero heading="Goods" subHeading="物資" />

      <TwoColumn>
        <TwoColumn.Main>ダミー</TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
}
