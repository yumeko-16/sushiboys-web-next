import type { Metadata } from 'next';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import PostBody from '@/components/PostBody/PostBody';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Sheet from '@/components/Sheet/Sheet';
import ContactForm from '@/components/ContactForm/ContactForm';
import Faq from '@/components/Faq/Faq';
import Contact from '@/components/Contact/Contact';

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
        <TwoColumn.Main>
          <Sheet>
            <ContactForm />
          </Sheet>

          <PostBody>
            <p>
              ご質問、ご相談は下記フォームよりお問い合わせください。
              <br />
              内容確認後、担当者よりご連絡いたします。
            </p>
          </PostBody>

          <Faq />
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
}
