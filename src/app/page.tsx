import { TOP_NEWS_LIMIT } from '@/constants';
import { getNewsList } from '@/libs/microcms';
import Hero from '@/components/Hero/Hero';
import Container from '@/components/Container/Container';
import NewsList from '@/components/NewsList/NewsList';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
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
