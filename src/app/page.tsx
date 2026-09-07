import Hero from '@/_components/Hero';
import NewsList from '@/_components/NewsList';
import ButtonLink from '@/_components/ButtonLink';
import { getNewsList } from '@/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/_constants';
import styles from './page.module.scss';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <Hero heading="SUSHIBOYS" imageOn />

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>

        <NewsList news={data.contents} />

        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
