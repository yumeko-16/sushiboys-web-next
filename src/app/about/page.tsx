import type { Metadata } from 'next';
import Container from '@/_components/Container';
import Hero from '@/_components/Hero';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import PostBody from '@/_components/PostBody';
import Sheet from '@/_components/Sheet';
import Member from '@/_components/Member';
import Contact from '@/_components/Contact';

export const metadata: Metadata = {
  title: 'About',
  description: 'SUSHIBOYSの生態系。',
  openGraph: {
    title: 'About - SUSHIBOYS',
    description: 'SUSHIBOYSの生態系。',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function Page() {
  return (
    <Container>
      <Hero heading="About" subHeading="組織概要" />

      <PostBody>
        <p>埼玉県越生町に突如現れた国民の最後の希望。</p>
        <p>映画マトリックスの世界観に衝撃を受け、2016年にグループ結成。</p>
        <p>
          自身たちが作成した楽曲は国民に真実を気付かせてしまうため、再生回数が伸びないよう政府によって厳重に管理されている。
        </p>
        <p>
          メンバーはFARMHOUSE、サンテナ、DJ兼カメラマン兼マネージャー兼運転手兼スーパーバイザーのneo
          yoshikawaで構成される。
        </p>
        <p>
          アヒルの形をしたゴムボートのようなものを客席に投げるLIVEに定評がある。
        </p>
      </PostBody>

      <TwoColumn>
        <TwoColumnMain>
          <Sheet>
            <Member />
          </Sheet>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
