import Container from '@/components/container/container';
import SiteName from '@/components/siteName/siteName';
import Nav from '@/components/nav/nav';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <SiteName boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
