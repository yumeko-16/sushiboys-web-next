import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './ButtonLink.module.scss';

type Props = {
  href: string;
  children: ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <Link className={styles.button} href={href}>
      {children}
    </Link>
  );
}
