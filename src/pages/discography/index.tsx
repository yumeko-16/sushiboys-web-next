import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import styles from '@/styles/Discography.module.scss';

import { discographyData } from '@/lib/discographyData';

export default function Discography() {
  return (
    <Container>
      <Meta pageTitle="Discography" pageDesc="SUSHIBOYSの生態系。" />

      <Hero heading="Discography" subHeading="楽曲" />

      {Object.entries(discographyData).map(([category, items]) => (
        <section key={category} className={styles.section}>
          <h2 className={styles.heading}>{category}</h2>

          <div className={styles.gridContainer}>
            {Object.entries(items)
              .sort(([, a], [, b]) => {
                return (b.release ?? '').localeCompare(a.release ?? '');
              })
              .map(([slug, item]) => (
                <article key={slug} className={styles.post}>
                  <Link href={`/discography/${category}/${slug}`}>
                    {item.image && (
                      <figure>
                        <Image
                          src={item.image}
                          alt={item.title ?? ''}
                          width={500}
                          height={500}
                          sizes="100vw"
                        />
                      </figure>
                    )}

                    {item.title && (
                      <>
                        <h3>{item.title}</h3>
                      </>
                    )}

                    {item.release && <p>{item.release}</p>}
                  </Link>
                </article>
              ))}
          </div>
        </section>
      ))}
    </Container>
  );
}
