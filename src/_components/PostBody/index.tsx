import type { ReactNode } from 'react';
import styles from './index.module.scss';

export default function PostBody({ children }: { children: ReactNode }) {
  return <div className={styles.stack}>{children}</div>;
}
