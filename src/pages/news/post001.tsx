import { getPostBySlug } from '@/lib/api';
import Container from '@/components/container/container';
import PostHeader from '@/components/postHeader/postHeader';

type Props = {
  title: string;
  eyecatch?: object;
  content: string;
  publish?: string;
};

export default function Post001({ title, eyecatch, content, publish }: Props) {
  return (
    <Container>
      <article>
        <PostHeader title={title} publish={publish} />
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
