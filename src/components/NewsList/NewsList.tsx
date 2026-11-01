import Link from 'next/link';
import Image from 'next/image';
import type { News } from '@/libs/microcms';
import PostCategory from '@/components/PostCategory/PostCategory';
import Date from '@/components/Date/Date';
import styles from './NewsList.module.scss';

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) return <p>記事がありません。</p>;

  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link className={styles.link} href={`/news/${article.id}`}>
            {article.eyecatch ? (
              <Image
                className={styles.image}
                src={article.eyecatch.url}
                alt=""
                width={article.eyecatch.width}
                height={article.eyecatch.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/images/no-image.png"
                alt="No Image"
                width={600}
                height={600}
              />
            )}

            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <PostCategory category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
