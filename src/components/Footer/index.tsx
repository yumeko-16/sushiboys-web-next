import Container from '@/components/Container';
import SiteName from '@/components/SiteName';
import Social from '@/components/Social';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <SiteName />
          <Social iconColor="var(--white, #fff)" />
        </div>

        <p className={styles.copyright}>©SUSHIBOYS</p>
      </Container>
    </footer>
  );
}
