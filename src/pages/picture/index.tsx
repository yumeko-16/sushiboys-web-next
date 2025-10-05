import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import styles from '@/styles/Picture.module.scss';

import summerVacation from '@/images/picture/look/summer-vacation/001.webp';

export default function Picture() {
  const images = [summerVacation];

  return (
    <Container>
      <Meta pageTitle="Picture" pageDesc="SUSHIBOYSの写真集" />

      <Hero heading="Picture" subHeading="視覚表現" />

      <div className={styles.gridContainer}>
        <article className={styles.post}>
          <Link href="/picture/look/summer-vacation">
            <figure>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt=""
                  width={5000}
                  height={2806}
                  sizes="100vw"
                />
              ))}
            </figure>

            <h2>夏休み編</h2>
          </Link>
        </article>
      </div>
    </Container>
  );
}
