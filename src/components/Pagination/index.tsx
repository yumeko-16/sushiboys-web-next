import Link from 'next/link';
import { NEWS_LIST_LIMIT } from '@/constants';
import styles from './index.module.scss';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = '/news',
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1,
  );

  return (
    <nav>
      <ul className={styles.list}>
        {pages.map((p) => (
          <li key={p} className={styles.item}>
            {current !== p ? (
              <Link className={styles.link} href={`${basePath}/p/${p}`}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.link} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
