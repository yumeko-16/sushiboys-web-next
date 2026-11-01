import Social from '@/components/Social/Social';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="1.375rem" />
      <address>sushiboys350@yahoo.co.jp</address>
    </div>
  );
}
