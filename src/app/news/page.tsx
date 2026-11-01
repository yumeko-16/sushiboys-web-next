import type { Metadata } from 'next';
import { getNewsList } from '@/libs/microcms';
import { NEWS_LIST_LIMIT } from '@/constants';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Sheet from '@/components/Sheet/Sheet';
import NewsList from '@/components/NewsList/NewsList';
import Pagination from '@/components/Pagination/Pagination';
import SearchField from '@/components/SearchField/SearchField';
import Contact from '@/components/Contact/Contact';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'News',
  description:
    'SUSHIBOYSニュース。ライブ出演、リリース情報、メディア掲載等の最新情報をご覧いただけます。',
  openGraph: {
    title: 'News - SUSHIBOYS',
    description:
      'SUSHIBOYSニュース。ライブ出演、リリース情報、メディア掲載等の最新情報をご覧いただけます。',
  },
  alternates: {
    canonical: '/news',
  },
};

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <Container>
      <Hero heading="News" subHeading="戦況報告" />

      <TwoColumn>
        <TwoColumn.Main>
          <Sheet>
            <SearchField />

            <NewsList news={news} />
          </Sheet>

          <Pagination totalCount={totalCount} />
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
}
