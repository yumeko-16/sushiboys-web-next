import { ReactNode } from 'react';
import styles from './twoColumn.module.scss';

type Porps = {
  children: ReactNode;
};

export default function TwoColumn({ children }: Porps) {
  return <div className={styles.flexContainer}>{children}</div>;
}

TwoColumn.Main = ({ children }: Porps) => {
  return <div className={styles.main}>{children}</div>;
};

TwoColumn.Sidebar = ({ children }: Porps) => {
  return <div className={styles.sidebar}>{children}</div>;
};
