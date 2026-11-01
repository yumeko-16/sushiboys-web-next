import type { ReactNode } from 'react';
import styles from './Sheet.module.scss';

type Props = {
  children: ReactNode;
};

export default function Sheet({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
