import { useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.scss';

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggeleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>
          {`
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          `}
        </style>
      )}

      <button className={styles.btn} onClick={toggeleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">Menu</span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/news" onClick={closeNav}>
            News
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            href="/picture/look/summer-vacation"
            onClick={closeNav}
          >
            Picture
          </Link>
        </li>
      </ul>
    </nav>
  );
}
