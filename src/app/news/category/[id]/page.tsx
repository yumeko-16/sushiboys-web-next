import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryDetail, getNewsList } from '@/libs/microcms';
import { NEWS_LIST_LIMIT } from '@/constants';
import Container from '@/components/Container/Container';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Sheet from '@/components/Sheet/Sheet';
import NewsList from '@/components/NewsList/NewsList';
import PostCategory from '@/components/PostCategory/PostCategory';
import Pagination from '@/components/Pagination/Pagination';
import Contact from '@/components/Contact/Contact';

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
        <TwoColumn.Main>
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
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
}
