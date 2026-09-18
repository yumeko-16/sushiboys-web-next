'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

const navItems = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'about', href: '/about', label: 'About' },
  { id: 'news', href: '/news', label: 'News' },
  { id: 'discography', href: '/discography', label: 'Discography' },
  { id: 'goods', href: '/goods', label: 'Goods' },
  { id: 'picture', href: '/picture/look/summer-vacation', label: 'Picture' },
  { id: 'contact', href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="srOnly">Menu</span>
      </button>

      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link className={styles.link} href={item.href} onClick={closeNav}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
