import { FormEvent } from 'react';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';

export default function Contact() {
  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const res = await fetch('/api/send', {
      body: JSON.stringify({
        email: (target.elements.namedItem('email') as HTMLInputElement).value,
        message: (target.elements.namedItem('message') as HTMLTextAreaElement)
          .value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <Container>
      <Meta pageTitle="Contact" pageDesc="お問い合わせ" />

      <Hero heading="Contact" subHeading="お問い合わせ" />

      <form onSubmit={registerUser}>
        <label>
          メールアドレス:
          <input type="email" name="email" required />
        </label>

        <label>
          メッセージ:
          <textarea name="message" required />
        </label>

        <button type="submit">送信</button>
      </form>
    </Container>
  );
}
