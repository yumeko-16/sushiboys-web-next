import Container from '@/components/Container';
import Hero from '@/components/Hero';
import NewsList from '@/components/NewsList';
import ButtonLink from '@/components/ButtonLink';
import { getNewsList } from '@/libs/microcms';
import { TOP_NEWS_LIMIT } from '@/constants';
import styles from './page.module.scss';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <Container>
      <Hero heading="SUSHIBOYS" imageOn />

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>

        <NewsList news={data.contents} />

        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </Container>
  );
}
