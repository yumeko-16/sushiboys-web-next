import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostHeader from '@/components/postHeader/postHeader';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';

import image from '@/images/discography/feat/lumos-makishima.webp';

export default function LumosMakishima() {
  return (
    <Container>
      <Meta
        pageTitle="ルーモス牧島 feat.SUSHIBOYS"
        pageDesc="ルーモス牧島 feat.SUSHIBOYS"
      />

      <Hero heading="Discography" subHeading="楽曲" />

      <article>
        <TwoColumn>
          <TwoColumn.Main>
            <PostHeader title="ルーモス牧島 feat.SUSHIBOYS" />

            <PostBody>
              <figure>
                <Image
                  src={image}
                  alt="ルーモス牧島 feat.SUSHIBOYS"
                  width={3000}
                  height={3000}
                  sizes="100vw"
                />
              </figure>

              <p>
                作品種別：feat.
                <br />
                発売日：2021.3.31
                <br />
                価格：未定
                <br />
                視聴：
                <a
                  href="https://linkco.re/taM16dGs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>ご視聴・ご購入はこちらから</u>
                </a>
              </p>

              <h2>Song contents</h2>

              <ol>
                <li>ルーモス牧島 feat.SUSHIBOYS</li>
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
