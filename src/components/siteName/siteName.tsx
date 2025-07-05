import Link from 'next/link';
import styles from './siteName.module.scss';

export default function SiteName({ boxOn = false }) {
  return (
    <Link className={boxOn ? styles.box : styles.basic} href="/">
      Sushiboys
    </Link>
  );
}
