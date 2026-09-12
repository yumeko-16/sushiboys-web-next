import Image from 'next/image';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Sheet from '../Sheet';
import PostHeader from '@/_components/PostHeader';
import PostBody from '@/_components/PostBody';
import ConvertBody from '@/_components/ConvertBody';
import ButtonLink from '@/_components/ButtonLink';
import Contact from '@/_components/Contact';
import type { News } from '@/_libs/microcms';
import styles from './index.module.scss';

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <article>
      <TwoColumn>
        <TwoColumnMain>
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
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </article>
  );
}
