import Container from '@/components/Container';
import SiteName from '@/components/SiteName';
import Nav from '@/components/Nav';
import styles from './index.module.scss';

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
