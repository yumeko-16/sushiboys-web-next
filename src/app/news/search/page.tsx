import type { Metadata } from 'next';
import Hero from '@/_components/Hero';
import Sheet from '@/_components/Sheet';
import NewsList from '@/_components/NewsList';
import SearchField from '@/_components/SearchField';
import { getNewsList } from '@/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/_constants';

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

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
    canonical: '/news/search',
  },
};

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q,
  });

  return (
    <>
      <Hero heading="News" subHeading="戦況報告" />

      <Sheet>
        <SearchField />
        <NewsList news={news} />
      </Sheet>
    </>
  );
}
