import Link from 'next/link';
import styles from './posts.module.scss';

type Post = {
  title: string;
  slug: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
    blurDataURL: string;
  };
};

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/news/${slug}`}>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}
