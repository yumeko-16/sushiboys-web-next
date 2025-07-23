import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostHeader from '@/components/postHeader/postHeader';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';

import image from '@/images/discography/record/gari.webp';

export default function Gari() {
  return (
    <Container>
      <Meta
        pageTitle="GARI"
        pageDesc="軽自動車 なんでもできる ダンボルギーニ"
      />

      <Hero heading="Discography" subHeading="楽曲" />

      <article>
        <TwoColumn>
          <TwoColumn.Main>
            <PostHeader title="GARI" />

            <PostBody>
              <figure>
                <Image
                  src={image}
                  alt="GARI"
                  width={500}
                  height={500}
                  sizes="100vw"
                />
              </figure>

              <p>
                作品種別：Record
                <br />
                発売日：2018.3.24
                <br />
                価格：￥2,200 (excluding tax)
              </p>

              <h2>Song contents</h2>

              <ol>
                <li>軽自動車</li>
                <li>なんでもできる</li>
                <li>ダンボルギーニ</li>
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
