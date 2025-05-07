import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import Container from '@/components/container/container';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';

export default function About() {
  return (
    <Container>
      <Meta pageTitle="ABOUT" pageDesc="SUSHIBOYSの生態系。" />

      <Hero heading="About" subHeading="本団体ニ関スル所" />

      <TwoColumn>
        <TwoColumn.Main>
          <PostBody>
            <p>埼玉県越生町に突如現れた国民の最後の希望。</p>
            <p>映画マトリックスの世界観に衝撃を受け、2016年にグループ結成。</p>
            <p>
              自身たちが作成した楽曲は国民に真実を気付かせてしまうため、再生回数が伸びないよう政府によって厳重に管理されている。
            </p>
            <p>
              メンバーはFARMHOUSE、サンテナ、DJ兼カメラマン兼マネージャー兼運転手兼スーパーバイザーのneo
              yosikawaで構成される。
            </p>
            <p>
              アヒルの形をしたゴムボートのようなものを客席に投げるLIVEに定評がある。
            </p>
          </PostBody>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
}
