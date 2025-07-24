import { useRouter } from 'next/router';
import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostHeader from '@/components/postHeader/postHeader';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';
import { discographyData } from '@/lib/discographyData';

export default function DiscographyDetail() {
  const router = useRouter();
  const { category, slug } = router.query;

  if (!category || !slug) {
    return <p>Loading...</p>;
  }

  const categoryData =
    discographyData[category as keyof typeof discographyData];
  const content = categoryData?.[slug as string];

  if (!content) {
    return <p>Not Found</p>;
  }

  return (
    <Container>
      <Meta pageTitle={content.title} pageDesc={content.desc} />

      <Hero heading="Discography" subHeading="楽曲" />

      <article>
        <TwoColumn>
          <TwoColumn.Main>
            {content.title && <PostHeader title={content.title} />}

            <PostBody>
              {content.image && content.title && (
                <>
                  <figure>
                    <Image
                      src={content.image}
                      alt={content.title}
                      width={500}
                      height={500}
                      sizes="100vw"
                    />
                  </figure>
                </>
              )}

              {(content.type ||
                content.release ||
                content.price ||
                content.link) && (
                <>
                  <p>
                    {content.type && <>作品種別：{content.type}</>}
                    {content.release && (
                      <>
                        <br />
                        発売日：{content.release}
                      </>
                    )}

                    {content.price && (
                      <>
                        <br />
                        価格：{content.price}
                      </>
                    )}

                    {content.link && (
                      <>
                        <br />
                        視聴：
                        <a
                          href={content.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <u>ご視聴・ご購入はこちらから</u>
                        </a>
                      </>
                    )}
                  </p>

                  {content.songs && (
                    <>
                      <h2>Song contents</h2>

                      <ol>
                        {content.songs.map((song, i) => (
                          <li key={i}>{song}</li>
                        ))}
                      </ol>
                    </>
                  )}

                  {content.bonusTracks && (
                    <>
                      <h2>Bonus track</h2>

                      <ol>
                        {content.bonusTracks.map((track, i) => (
                          <li key={i}>{track}</li>
                        ))}
                      </ol>
                    </>
                  )}
                </>
              )}
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
