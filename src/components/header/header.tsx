import SiteName from '@/components/siteName/siteName';
import Nav from '@/components/nav/nav';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <SiteName boxOn />
        <Nav />
      </div>
    </header>
  );
}
