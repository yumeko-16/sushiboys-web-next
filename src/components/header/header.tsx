import SiteName from '@/components/siteName/siteName';
import Nav from '@/components/nav/nav';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <SiteName boxOn />
      <Nav />
    </header>
  );
}
