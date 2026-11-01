import Container from '@/components/Container/Container';
import SiteName from '@/components/SiteName/SiteName';
import Nav from '@/components/Nav/Nav';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container large>
        <div className={styles.flexContainer}>
          <SiteName />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
