import Container from '@/components/Container/Container';
import SiteName from '@/components/SiteName/SiteName';
import Social from '@/components/Social/Social';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <SiteName />
          <Social iconColor="var(--white, #fff)" />
        </div>

        <p className={styles.copyright}>&copy; SUSHIBOYS</p>
      </Container>
    </footer>
  );
}
