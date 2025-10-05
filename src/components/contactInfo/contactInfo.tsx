import Social from '@/components/social/social';
import styles from './contactInfo.module.scss';

export default function ContactInfo() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="1.375rem" />
      <address>sushiboys350@yahoo.co.jp</address>
    </div>
  );
}
