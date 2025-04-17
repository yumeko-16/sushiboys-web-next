import { ReactNode } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
