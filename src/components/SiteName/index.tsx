import Link from 'next/link';
import styles from './index.module.scss';

export default function SiteName() {
  return (
    <Link className={styles.basic} href="/">
      Sushiboys
    </Link>
  );
}
