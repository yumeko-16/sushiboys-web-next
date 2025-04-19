import styles from './siteName.module.scss';

export default function SiteName({ boxOn = false }) {
  return <span className={boxOn ? styles.box : styles.basic}>Sushiboys</span>;
}
