import type { Metadata } from 'next';
import Container from '@/_components/Container';
import PictureArticle from '@/_components/PictureArticle';

const TITLE = '夏休み編';

export const metadata: Metadata = {
  title: TITLE,
  description: '夏休み編の写真集を掲載しています。',
  openGraph: {
    title: '夏休み編 - SUSHIBOYS',
    description: '夏休み編の写真集を掲載しています。',
  },
  alternates: {
    canonical: '/picture/look/summer-vacation',
  },
};

const DATA = {
  contents: Array.from({ length: 41 }, (_, index) => {
    const number = String(index + 1).padStart(3, '0');

    return {
      image: {
        url: `/images/picture/look/summer-vacation/${number}.webp`,
        alt: '',
        width: 6000,
        height: 3368,
      },
    };
  }),
};

export default function Page() {
  return (
    <Container>
      <PictureArticle heading={TITLE} contents={DATA.contents} />
    </Container>
  );
}
