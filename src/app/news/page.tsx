import type { Metadata } from 'next';
import Container from '@/_components/Container';
import Hero from '@/_components/Hero';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Sheet from '@/_components/Sheet';
import NewsList from '@/_components/NewsList';
import Pagination from '@/_components/Pagination';
import SearchField from '@/_components/SearchField';
import Contact from '@/_components/Contact';
import { getNewsList } from '@/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/_constants';

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
        <TwoColumnMain>
          <Sheet>
            <SearchField />

            <NewsList news={news} />
          </Sheet>

          <Pagination totalCount={totalCount} />
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
