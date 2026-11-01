import type { Metadata } from 'next';
import { getNewsList } from '@/libs/microcms';
import { NEWS_LIST_LIMIT } from '@/constants';
import Hero from '@/components/Hero/Hero';
import Container from '@/components/Container/Container';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Sheet from '@/components/Sheet/Sheet';
import NewsList from '@/components/NewsList/NewsList';
import SearchField from '@/components/SearchField/SearchField';
import Contact from '@/components/Contact/Contact';

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

      <Container>
        <TwoColumn>
          <TwoColumn.Main>
            <Sheet>
              <SearchField />

              <NewsList news={news} />
            </Sheet>
          </TwoColumn.Main>

          <TwoColumn.Sidebar>
            <Contact />
          </TwoColumn.Sidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
