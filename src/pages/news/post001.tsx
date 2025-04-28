import Image from 'next/image';
import defaultEyecatch from '@/images/no-image.png';
import { getPostBySlug } from '@/lib/api';
import { extractText } from '@/lib/extractText';
import Meta from '@/components/meta/meta';
import Container from '@/components/container/container';
import TwoColumn from '@/components/twoColumn/twoColumn';
import PostHeader from '@/components/postHeader/postHeader';
import PostBody from '@/components/postBody/postBody';
import Contact from '@/components/contact/contact';
import ConvertBody from '@/components/convertBody/convertBody';

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
  description: string;
};

export default function Post001({
  title,
  eyecatch,
  content,
  publish,
  description,
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
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const slug = 'post001';
  const post = await getPostBySlug(slug);
  const description = extractText(post.content);

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
      description: description,
    },
  };
}
