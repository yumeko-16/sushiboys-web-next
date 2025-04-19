import SiteName from '@/components/siteName/siteName';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <SiteName />
        [ソーシャル]
      </div>
    </footer>
  );
}
