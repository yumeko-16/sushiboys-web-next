import Link from 'next/link';
import styles from './nav.module.scss';

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/news">
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
}
