import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNewsDetail } from '@/libs/microcms';
import Container from '@/components/Container/Container';
import NewsArticle from '@/components/NewsArticle/NewsArticle';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk?: string;
  }>;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { dk } = await searchParams;
  const data = await getNewsDetail(slug, {
    draftKey: dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.eyecatch?.url ? [data.eyecatch.url] : [],
    },
    alternates: {
      canonical: `/news/${slug}`,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const { dk } = await searchParams;
  const data = await getNewsDetail(slug, { draftKey: dk }).catch(notFound);

  return (
    <Container>
      <NewsArticle data={data} />
    </Container>
  );
}
