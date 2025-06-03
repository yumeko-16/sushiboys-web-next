import { getAllPosts } from '@/lib/api';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import Container from '@/components/container/container';
import Posts from '@/components/posts/posts';

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

export default function News({ posts }: Props) {
  return (
    <Container>
      <Meta
        pageTitle="NEWS"
        pageDesc="SUSHIBOYSニュース。ライブ出演、リリース情報、メディア掲載等の最新情報をご覧いただけます。"
      />

      <Hero heading="News" subHeading="大本営発表" />

      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
