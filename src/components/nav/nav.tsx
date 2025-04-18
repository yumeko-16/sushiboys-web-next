import Link from 'next/link';
import styles from './nav.module.scss';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </nav>
  );
}
