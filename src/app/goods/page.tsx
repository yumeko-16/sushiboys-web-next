import type { Metadata } from 'next';
import Hero from '@/_components/Hero';

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
    <>
      <Hero heading="Goods" subHeading="物資" />
    </>
  );
}
