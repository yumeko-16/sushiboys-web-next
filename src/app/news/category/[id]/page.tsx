import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/TwoColumn';
import Sheet from '@/components/Sheet';
import NewsList from '@/components/NewsList';
import PostCategory from '@/components/PostCategory';
import Pagination from '@/components/Pagination';
import Contact from '@/components/Contact';
import { getCategoryDetail, getNewsList } from '@/libs/microcms';
import { NEWS_LIST_LIMIT } from '@/constants';

type Props = {
  params: Promise<{
    id: string;
    name: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = await getCategoryDetail(id).catch(notFound);

  return {
    title: category.name,
    description: `SUSHIBOYSの${category.name}ニュース。`,
    openGraph: {
      title: category.name,
      description: `SUSHIBOYSの${category.name}ニュース。`,
    },
    alternates: {
      canonical: `/news/category/${id}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const category = await getCategoryDetail(id).catch(notFound);
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${id}`,
  });

  return (
    <Container>
      <TwoColumn>
        <TwoColumnMain>
          <p>
            <PostCategory category={category} /> の一覧
          </p>

          <Sheet>
            <NewsList news={news} />
          </Sheet>

          <Pagination
            totalCount={totalCount}
            basePath={`/news/category/${category.id}`}
          />
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
