import Image from 'next/image';
import type { News } from '@/libs/microcms';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Sheet from '@/components/Sheet/Sheet';
import PostHeader from '@/components/PostHeader/PostHeader';
import PostBody from '@/components/PostBody/PostBody';
import ConvertBody from '@/components/ConvertBody/ConvertBody';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import Contact from '@/components/Contact/Contact';
import styles from './NewsArticle.module.scss';

type Props = {
  data: News;
};

export default function NewsArticle({ data }: Props) {
  return (
    <article>
      <TwoColumn>
        <TwoColumn.Main>
          <Sheet>
            <PostHeader
              title={data.title}
              category={data.category}
              date={data.publishedAt ?? data.createdAt}
            />

            {data.eyecatch && (
              <figure className={styles.eyecatch}>
                <Image
                  src={data.eyecatch.url}
                  alt=""
                  width={data.eyecatch.width}
                  height={data.eyecatch.height}
                  sizes="(min-width: 1253px) 1152px, 100vw"
                  priority
                />
              </figure>
            )}

            <PostBody>
              <ConvertBody contentHTML={data.content} />
            </PostBody>
          </Sheet>

          <div>
            <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
          </div>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </article>
  );
}
