import Container from '@/components/container/container';
import SiteName from '@/components/siteName/siteName';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <SiteName />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
}
