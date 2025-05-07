import Logo from '@/components/logo/logo';
import styles from './hero.module.scss';

type Props = {
  heading?: string;
  subHeading?: string;
  imageOn?: boolean;
};

export default function Hero({ heading, subHeading, imageOn = false }: Props) {
  return (
    <div className={styles.container} data-image={imageOn ? 'true' : 'false'}>
      {heading ? (
        <>
          <h1 className={styles.heading}>{heading}</h1>

          {subHeading && <p className={styles.subHeading}>{subHeading}</p>}
        </>
      ) : imageOn ? (
        <h1>
          <Logo />
        </h1>
      ) : null}
    </div>
  );
}
