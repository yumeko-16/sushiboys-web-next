import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import type { GetStaticPropsContext } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import { eyecatchLocal } from '@/lib/constants';
import defaultEyecatch from '@/images/no-image.png';
import { getPostBySlug, getAllSlugs } from '@/lib/api';
import { extractText } from '@/lib/extractText';
import { prevNextPost } from '@/lib/prev-next-post';
import Meta from '@/components/meta/meta';
import Container from '@/components/container/container';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostHeader from '@/components/postHeader/postHeader';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';
import ConvertBody from '@/components/convertBody/convertBody';
import Pagination from '@/components/pagination/pagination';

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

type Props = {
  title: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
    blurDataURL: string;
  };
  content: string;
  publish?: string;
  description: string;
  slug: string;
  prevPost: {
    title: string;
    slug: string;
  };
  nextPost: {
    title: string;
    slug: string;
  };
};

export default function Post({
  title,
  eyecatch,
  content,
  publish,
  description,
  prevPost,
  nextPost,
}: Props) {
  const src = eyecatch?.url ?? defaultEyecatch;
  const width = eyecatch?.width ?? DEFAULT_WIDTH;
  const height = eyecatch?.height ?? DEFAULT_HEIGHT;

  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <article>
        <PostHeader title={title} publish={publish} />

        <figure>
          <Image
            src={src}
            alt=""
            layout="responsive"
            width={width}
            height={height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>

        <TwoColumn>
          <TwoColumn.Main>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumn.Main>

          <TwoColumn.Sidebar>
            <Contact />
          </TwoColumn.Sidebar>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/news/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/news/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs();

  return {
    paths: allSlugs.map(({ slug }: { slug: string }) => `/news/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug as string;

  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      notFound: true,
    };
  }

  const description = extractText(post.content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;

  let blurDataURL = '';
  try {
    if (eyecatch.url.startsWith('http')) {
      const res = await fetch(eyecatch.url);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const { base64 } = await getPlaiceholder(buffer);
      blurDataURL = base64;
    } else {
      const imagePath = path.join(process.cwd(), 'public', eyecatch.url);
      const buffer = fs.readFileSync(imagePath);
      const { base64 } = await getPlaiceholder(buffer);
      blurDataURL = base64;
    }
  } catch (error) {
    console.error('Failed to generate blurDataURL:', error);
  }

  eyecatch.blurDataURL = blurDataURL;

  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  return {
    props: {
      title: post.title,
      eyecatch: eyecatch,
      content: post.content,
      publish: post.publishDate ?? null,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
}
