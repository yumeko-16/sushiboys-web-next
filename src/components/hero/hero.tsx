import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '@/components/logo/logo';
import styles from './hero.module.scss';

type Props = {
  heading?: string;
  subHeading?: string;
  imageOn?: boolean;
};

export default function Hero({ heading, subHeading, imageOn = false }: Props) {
  const { pathname } = useRouter();
  const pathSegments = pathname.split('/').filter(Boolean);
  const isThirdLevel = pathSegments.length >= 2;
  const secondLevelHref = pathSegments.length > 0 ? `/${pathSegments[0]}` : '/';

  return (
    <div
      className={styles.container}
      data-image={imageOn ? 'true' : 'false'}
      data-third-level={isThirdLevel ? 'true' : 'false'}
    >
      {heading ? (
        isThirdLevel ? (
          <>
            <Link className={styles.heading} href={secondLevelHref}>
              {heading}
            </Link>

            {subHeading && (
              <Link className={styles.subHeading} href={secondLevelHref}>
                {subHeading}
              </Link>
            )}
          </>
        ) : (
          <>
            <h1 className={styles.heading}>{heading}</h1>

            {subHeading && <p className={styles.subHeading}>{subHeading}</p>}
          </>
        )
      ) : imageOn ? (
        <h1>
          <Logo />
        </h1>
      ) : null}
    </div>
  );
}
