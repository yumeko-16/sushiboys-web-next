import Link from 'next/link';
import Image from 'next/image';
import Date from '@/_components/Date';
import Category from '@/_components/Category';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Sheet from '../Sheet';
import PostBody from '@/_components/PostBody';
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
            <h1>{data.title}</h1>

            <div>
              <Link href={`/news/category/${data.category.id}`}>
                <Category category={data.category} />
              </Link>

              <Date date={data.publishedAt ?? data.createdAt} />
            </div>

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

            <PostBody html={data.content} />
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
