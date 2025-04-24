import Image from 'next/image';
import defaultEyecatch from '@/images/no-image.png';
import { getPostBySlug } from '@/lib/api';
import Container from '@/components/container/container';
import PostHeader from '@/components/postHeader/postHeader';

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

type Props = {
  title: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
  content: string;
  publish?: string;
};

export default function Post001({ title, eyecatch, content, publish }: Props) {
  const src = eyecatch?.url ?? defaultEyecatch;
  const width = eyecatch?.width ?? DEFAULT_WIDTH;
  const height = eyecatch?.height ?? DEFAULT_HEIGHT;

  return (
    <Container>
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
          />
        </figure>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const slug = 'post001';
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: post.title,
      eyecatch: post.eyecatch,
      content: post.content,
      publish: post.publishDate ?? null,
    },
  };
}
