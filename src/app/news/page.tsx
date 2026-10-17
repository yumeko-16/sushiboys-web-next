import type { Metadata } from 'next';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/TwoColumn';
import Sheet from '@/components/Sheet';
import NewsList from '@/components/NewsList';
import Pagination from '@/components/Pagination';
import SearchField from '@/components/SearchField';
import Contact from '@/components/Contact';
import { getNewsList } from '@/libs/microcms';
import { NEWS_LIST_LIMIT } from '@/constants';

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
