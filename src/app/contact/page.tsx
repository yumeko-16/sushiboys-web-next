import Hero from '@/_components/Hero';
import Sheet from '@/_components/Sheet';
import ContactForm from '@/_components/ContactForm';
import styles from './page.module.scss';

export default function Page() {
  return (
    <>
      <Hero heading="Contact" subHeading="交信" />

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
    </>
  );
}
