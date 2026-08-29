import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/_components/Hero';
import Sheet from '@/_components/Sheet';
import NewsList from '@/_components/NewsList';
import Pagination from '@/_components/Pagination';
import { getNewsList } from '@/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/_constants';

type Props = {
  params: Promise<{
    current: string;
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
    canonical: '/news',
  },
};

export default async function Page({ params }: Props) {
  const { current } = await params;
  const parsed = parseInt(current, 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (parsed - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <Hero heading="News" subHeading="戦況報告" />

      <Sheet>
        <NewsList news={news} />
      </Sheet>

      <Pagination totalCount={totalCount} current={parsed} />
    </>
  );
}
