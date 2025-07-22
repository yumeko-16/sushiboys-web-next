import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostHeader from '@/components/postHeader/postHeader';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';

import image from '@/images/discography/single/nandemodekiru.jpg';

export default function Nandemodekiru() {
  return (
    <Container>
      <Meta pageTitle="なんでもできる" pageDesc="なんでもできる" />

      <Hero heading="Discography" subHeading="楽曲" />

      <article>
        <TwoColumn>
          <TwoColumn.Main>
            <PostHeader title="なんでもできる" />

            <PostBody>
              <figure>
                <Image
                  src={image}
                  alt="なんでもできる"
                  width={500}
                  height={500}
                  sizes="100vw"
                />
              </figure>

              <p>
                作品種別：Single
                <br />
                発売日：2018.1.13
                <br />
                価格：未定
                <br />
                視聴：
                <a
                  href="https://music.apple.com/jp/album/1333476632?app=music"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>ご視聴・ご購入はこちらから</u>
                </a>
              </p>

              <h2>Song contents</h2>

              <ol>
                <li>なんでもできる</li>
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
