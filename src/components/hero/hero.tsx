import Logo from '@/components/logo/logo';
import styles from './hero.module.scss';

type Props = {
  heading?: string;
};

export default function Hero({ heading = 'Sushiboys' }: Props) {
  return (
    <div className={styles.hero}>
      <Logo />

      {heading && (
        <div className={styles.fixed}>
          <h1 className={styles.heading}>{heading}</h1>
        </div>
      )}
    </div>
  );
}
