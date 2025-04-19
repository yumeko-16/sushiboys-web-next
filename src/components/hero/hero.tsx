import Logo from '@/components/logo/logo';
import styles from './hero.module.scss';

type Props = {
  heading?: string;
};

export default function Hero({ heading }: Props) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title} aria-label="SUSHIBOYS">
        <Logo />
      </h1>

      {heading && (
        <div className={styles.fixed}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
      )}
    </div>
  );
}
