import { useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.scss';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/discography', label: 'Discography' },
  { href: '/picture', label: 'Picture' },
];

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
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

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">Menu</span>
      </button>

      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link className={styles.link} href={item.href} onClick={closeNav}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
