import Link from 'next/link';
import Image from 'next/image';
import styles from './posts.module.scss';

const DEFAULT_EYECATCH = {
  url: '/eyecatch.webp',
  width: 2000,
  height: 3000,
  blurDataURL: '', // optional: 必要なら Base64 で用意してもよい
};

type Post = {
  title: string;
  slug: string;
  eyecatch?: {
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
      {posts.map(({ title, slug, eyecatch }) => {
        const image = eyecatch ?? DEFAULT_EYECATCH;

        return (
          <article className={styles.post} key={slug}>
            <Link href={`/news/${slug}`}>
              <figure>
                <Image
                  src={image.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                  placeholder={image.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={image.blurDataURL}
                />
              </figure>

              <h2>{title}</h2>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
