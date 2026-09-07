import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/_components/Container';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Article from '@/_components/Article';
import ButtonLink from '@/_components/ButtonLink';
import Contact from '@/_components/Contact';
import { getNewsDetail } from '@/_libs/microcms';

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
    <>
      <Container>
        <TwoColumn>
          <TwoColumnMain>
            <Article data={data} />

            <div>
              <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
          </TwoColumnMain>

          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
