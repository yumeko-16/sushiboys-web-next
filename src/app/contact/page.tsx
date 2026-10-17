import type { Metadata } from 'next';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import PostBody from '@/components/PostBody';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/TwoColumn';
import Sheet from '@/components/Sheet';
import ContactForm from '@/components/ContactForm';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'SUSHIBOYSの鼓膜に直接コンタクト。ご連絡おまちしております。',
  openGraph: {
    title: 'Contact - SUSHIBOYS',
    description: 'SUSHIBOYSの鼓膜に直接コンタクト。ご連絡おまちしております。',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Page() {
  return (
    <Container>
      <Hero heading="Contact" subHeading="交信" />

      <PostBody>
        <p>
          ご質問、ご相談は下記フォームよりお問い合わせください。
          <br />
          内容確認後、担当者よりご連絡いたします。
        </p>
      </PostBody>

      <TwoColumn>
        <TwoColumnMain>
          <Sheet>
            <ContactForm />
          </Sheet>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
