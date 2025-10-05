import { getPlaiceholder } from 'plaiceholder';
import { getAllPosts } from '@/lib/api';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import Posts from '@/components/posts/posts';
import Pagination from '@/components/pagination/pagination';

type Post = {
  title: string;
  slug: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
    blurDataURL: string;
  };
};

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <Container>
      <Meta />

      <Hero imageOn />

      <Posts posts={posts} />

      <Pagination nextUrl="/news" nextText="More Posts" />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (post.eyecatch?.url) {
      try {
        const response = await fetch(post.eyecatch.url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const { base64 } = await getPlaiceholder(buffer);
        post.eyecatch.bluDataURL = base64;
      } catch (err) {
        console.error('Failed to generate blurDataURL:', err);
        post.eyecatch.blurDataURL = '';
      }
    }
  }

  return {
    props: {
      posts: posts,
    },
  };
}
