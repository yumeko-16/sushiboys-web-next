import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

const DATA = {
  contents: [
    {
      id: 'picture/look/summer-vacation/',
      eyecatch: {
        url: '/images/picture/look/summer-vacation/001.webp',
        alt: '',
        width: 6000,
        height: 3368,
      },
    },
  ],
};

export default function PictureList() {
  if (DATA.contents.length === 0) return <p>記事がありません。</p>;

  return (
    <ul>
      {DATA.contents.map((article) => (
        <li key={article.id}>
          <Link href={`/picture/${article.id}`}>
            <figure className={styles.image}>
              <Image
                src={article.eyecatch.url}
                alt={article.eyecatch.alt}
                width={article.eyecatch.width}
                height={article.eyecatch.height}
              />
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
}
