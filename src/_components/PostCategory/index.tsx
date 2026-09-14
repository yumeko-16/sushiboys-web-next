import type { Category } from '@/_libs/microcms';
import styles from './index.module.scss';

type Props = {
  category: Category;
};

export default function PostCategory({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
