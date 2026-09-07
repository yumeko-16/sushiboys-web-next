import Image from 'next/image';
import Container from '@/_components/Container';
import styles from './index.module.scss';

type Props = {
  heading: string;
  subHeading?: string;
  imageOn?: boolean;
};

export default function Hero({ heading, subHeading, imageOn = false }: Props) {
  return (
    <section
      className={styles.container}
      data-image={imageOn ? 'true' : 'false'}
    >
      {imageOn ? (
        <h1 className={styles.logo}>
          <Image
            src="/logo.webp"
            alt={heading}
            width={3000}
            height={2000}
            priority
            sizes="(min-width: 768px) 500px, 92vw"
          />
        </h1>
      ) : (
        <Container>
          <h1 className={styles.heading} data-ja={subHeading}>
            {heading}
          </h1>
        </Container>
      )}
    </section>
  );
}
