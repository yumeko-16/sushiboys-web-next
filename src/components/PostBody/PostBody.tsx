import type { ReactNode } from 'react';
import styles from './PostBody.module.scss';

type Props = {
  children: ReactNode;
};

export default function PostBody({ children }: Props) {
  return <div className={styles.stack}>{children}</div>;
}
