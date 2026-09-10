import { ReactNode } from 'react';
import styles from './index.module.scss';

type Props = {
  children?: ReactNode;
  html?: string;
};

export default function PostBody({ children, html }: Props) {
  return (
    <div
      className={styles.stack}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}
    >
      {children}
    </div>
  );
}
