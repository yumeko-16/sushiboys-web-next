import type { ReactNode } from 'react';
import styles from './NumberedAccordion.module.scss';

type Props = {
  heading: string;
  children: ReactNode;
};

export default function NumberedAccordion({ heading, children }: Props) {
  return (
    <details className={styles.accordion}>
      <summary className={styles.heading}>{heading}</summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
