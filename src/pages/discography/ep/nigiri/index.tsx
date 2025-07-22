import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostHeader from '@/components/postHeader/postHeader';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';

import image from '@/images/discography/ep/nigiri.webp';

export default function Nigiri() {
  return (
    <Container>
      <Meta
        pageTitle="Nigiri"
        pageDesc="Catch ur dream 遊園地 ダンボルギーニ OMG だけど元気 思ったよりも ブルーハワイ Yossy Peace club 軽自動車 NIGIRI"
      />

      <Hero heading="Discography" subHeading="楽曲" />

      <article>
        <TwoColumn>
          <TwoColumn.Main>
            <PostHeader title="Nigiri" />

            <PostBody>
              <figure>
                <Image
                  src={image}
                  alt="Nigiri"
                  width={500}
                  height={500}
                  sizes="100vw"
                />
              </figure>

              <p>
                作品種別：EP
                <br />
                発売日：2017.10.15
                <br />
                価格：￥2,000 (excluding tax)
                <br />
                視聴：
                <a
                  href="https://linkco.re/nQ6dUExe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>ご視聴・ご購入はこちらから</u>
                </a>
              </p>

              <h2>Song contents</h2>

              <ol>
                <li>Catch ur dream</li>
                <li>遊園地</li>
                <li>ダンボルギーニ</li>
                <li>OMG</li>
                <li>だけど元気</li>
                <li>思ったよりも</li>
                <li>ブルーハワイ</li>
                <li>Yossy</li>
                <li>Peace club</li>
                <li>軽自動車</li>
                <li>NIGIRI</li>
              </ol>
            </PostBody>
          </TwoColumn.Main>

          <TwoColumn.Sidebar>
            <Contact />
          </TwoColumn.Sidebar>
        </TwoColumn>
      </article>
    </Container>
  );
}
