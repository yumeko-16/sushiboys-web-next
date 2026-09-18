import type { Metadata } from 'next';
import Container from '@/_components/Container';
import SummerVacation from '@/_components/SummerVacation';

export const metadata: Metadata = {
  title: '夏休み編',
  description: '夏休み編の写真集を掲載しています。',
  openGraph: {
    title: '夏休み編 - SUSHIBOYS',
    description: '夏休み編の写真集を掲載しています。',
  },
  alternates: {
    canonical: '/picture/look/summer-vacation',
  },
};

export default function Page() {
  return (
    <Container>
      <SummerVacation />
    </Container>
  );
}
