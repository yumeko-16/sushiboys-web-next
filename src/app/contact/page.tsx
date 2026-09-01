import type { Metadata } from 'next';
import Hero from '@/_components/Hero';
import Container from '@/_components/Container';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Sheet from '@/_components/Sheet';
import ContactForm from '@/_components/ContactForm';
import Contact from '@/_components/Contact';
import styles from './page.module.scss';

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
    <>
      <Hero heading="Contact" subHeading="交信" />

      <Container>
        <TwoColumn>
          <TwoColumnMain>
            <Sheet>
              <div className={styles.text}>
                <p>
                  ご質問、ご相談は下記フォームよりお問い合わせください。
                  <br />
                  内容確認後、担当者よりご連絡いたします。
                </p>
              </div>

              <ContactForm />
            </Sheet>
          </TwoColumnMain>

          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
