import type { Metadata } from 'next';
import Container from '@/_components/Container';
import Hero from '@/_components/Hero';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Contact from '@/_components/Contact';

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
        <TwoColumnMain>ダミー</TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
