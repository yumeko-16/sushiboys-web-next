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
import Members from '@/_components/Members';
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

const DATA = {
  contents: [
    {
      id: '1',
      image: {
        url: '/member_farmhouse.jpg',
        alt: '',
        width: 480,
        height: 480,
      },
      name: 'FARMHOUSE',
      position: 'CEO',
      profile:
        '腹に赤子を宿している。いつも自分の腹をさすって語りかけているからきっとそうなのだろう。',
    },
    {
      id: '2',
      image: {
        url: '/member_santena.jpg',
        alt: '',
        width: 480,
        height: 480,
      },
      name: 'サンテナ',
      position: 'COO',
      profile:
        '脳筋。三國無双でいうところの魏延。敵キャラとして出てくるCPUの魏延はエグい。',
    },
    {
      id: '3',
      image: {
        url: '/member_neo-yoshikawa.jpg',
        alt: '',
        width: 480,
        height: 480,
      },
      name: 'neo yoshikawa',
      position: 'CTO',
      profile: '電話交換手。小説の中だと頻繁に惨殺される。',
    },
  ],
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
            <Members contents={DATA.contents} />
          </Sheet>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
