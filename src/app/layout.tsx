import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import Header from '@/_components/Header';
import Footer from '@/_components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://sushiboys350.com'),
  title: {
    template: '%s - SUSHIBOYS',
    default: 'SUSHIBOYS',
  },
  description:
    'SUSHIBOYSオフィシャルウェブサイト。メンバーはFARMHOUSE、サンテナ、DJ兼カメラマン兼マネージャー兼運転手兼スーパーバイザーのneo yosikawa。寿司ボーイズのライブ、ディスコグラフィ、グッズなどの最新情報を掲載しています。',
  openGraph: {
    title: 'SUSHIBOYS',
    description:
      'SUSHIBOYSオフィシャルウェブサイト。メンバーはFARMHOUSE、サンテナ、DJ兼カメラマン兼マネージャー兼運転手兼スーパーバイザーのneo yosikawa。寿司ボーイズのライブ、ディスコグラフィ、グッズなどの最新情報を掲載しています。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
