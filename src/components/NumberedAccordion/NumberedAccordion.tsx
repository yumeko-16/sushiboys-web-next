import type { ReactNode } from 'react';
import styles from './NumberedAccordion.module.scss';

type Props = {
  heading: string;
  text: ReactNode;
};

export default function NumberedAccordion({ heading, text }: Props) {
  return (
    <details className={styles.wrapper}>
      <summary className={styles.heading}>{heading}</summary>

      <div className={styles.text}>
        <p>{text}</p>
      </div>
    </details>
  );
}
