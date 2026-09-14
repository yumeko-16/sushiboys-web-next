import Link from 'next/link';
import PostCategory from '@/_components/PostCategory';
import Date from '@/_components/Date';
import type { Category as CategoryType } from '@/_libs/microcms';
import styles from './index.module.scss';

type Props = {
  title: string;
  category: CategoryType;
  date: string;
};

export default function PostHeader({ title, category, date }: Props) {
  return (
    <div className={styles.stack}>
      <h1>{title}</h1>

      <Link href={`/news/category/${category.id}`}>
        <PostCategory category={category} />
      </Link>

      <Date date={date} />
    </div>
  );
}
