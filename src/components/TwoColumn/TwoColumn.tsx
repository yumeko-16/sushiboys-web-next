import type { ReactNode } from 'react';
import styles from './TwoColumn.module.scss';

type Props = {
  children: ReactNode;
};

export default function TwoColumn({ children }: Props) {
  return <div className={styles.flexContainer}>{children}</div>;
}

TwoColumn.Main = function Main({ children }: Props) {
  return <div className={styles.main}>{children}</div>;
};

TwoColumn.Sidebar = function Sidebar({ children }: Props) {
  return <div className={styles.sidebar}>{children}</div>;
};
