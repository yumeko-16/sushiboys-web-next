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
        name: (target.elements.namedItem('name') as HTMLInputElement).value,
        email: (target.elements.namedItem('email') as HTMLInputElement).value,
        subject: (target.elements.namedItem('subject') as HTMLInputElement)
          .value,
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
          お名前：
          <input type="text" name="name" placeholder="来五張" required />
        </label>

        <label>
          メールアドレス:
          <input
            type="email"
            name="email"
            placeholder="raigocho@gmail.com"
            required
          />
        </label>

        <label>
          件名：
          <input
            type="text"
            name="subject"
            placeholder="ザリガニの集団心理"
            required
          />
        </label>

        <label>
          メッセージ:
          <textarea
            name="message"
            placeholder="無矛盾な公理的集合論は自己の無矛盾性を証明できないザリガニである。"
            required
          />
        </label>

        <button type="submit">送信</button>
      </form>
    </Container>
  );
}
