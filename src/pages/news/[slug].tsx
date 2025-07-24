import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostHeader from '@/components/postHeader/postHeader';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';
import { discographyData, DiscographyItem } from '@/lib/discographyData';

type Props = {
  content: DiscographyItem;
};

export default function DiscographyDetail({ content }: Props) {
  return (
    <Container>
      <Meta pageTitle={content.title} pageDesc={content.desc} />

      <Hero heading="Discography" subHeading="楽曲" />

      <article>
        <TwoColumn>
          <TwoColumn.Main>
            <PostHeader title={content.title} />

            <PostBody>
              <figure>
                <Image
                  src={content.image}
                  alt={content.title}
                  width={500}
                  height={500}
                  sizes="100vw"
                />
              </figure>

              <p>
                作品種別：{content.type}
                <br />
                発売日：{content.release}
                <br />
                価格：{content.price}
                <br />
                視聴：
                <a
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>ご視聴・ご購入はこちらから</u>
                </a>
              </p>

              <h2>Song contents</h2>
              <ol>
                {content.songs.map((song, i) => (
                  <li key={i}>{song}</li>
                ))}
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

// 静的パスを生成
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.entries(discographyData).flatMap(([category, items]) =>
    Object.keys(items).map((slug) => ({
      params: { category, slug },
    })),
  );
  return { paths, fallback: false };
};

// ページ用データを渡す
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const category = params?.category as string;
  const slug = params?.slug as string;
  const content = discographyData[category]?.[slug] ?? null;

  if (!content) {
    return { notFound: true };
  }

  return {
    props: { content },
  };
};
