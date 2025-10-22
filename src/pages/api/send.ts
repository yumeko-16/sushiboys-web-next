import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const { name, email, subject, message } = req.body;

  const toUser = {
    to: email,
    from: 'sushiboys.dev@gmail.com',
    subject: `SUSHIBOYS - 「${subject}」のお問合せを受け付けました`,
    text: `お問い合わせを受け付けました。\n\n件名: ${subject}\nメール: ${message}\n\n回答をお待ちください。`,
    html: `
      <p>
        お問合せを受け付けました。回答をお待ちください。
      </p>
      <hr />
      <p><strong>お名前:</strong> ${name}</p>
      <p><strong>件名:</strong> ${subject}</p>
      <p><strong>メール:</strong> ${email}</p>
      <p><strong>内容:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  };

  const toAdmin = {
    to: 'sushiboys.dev@gmail.com',
    from: 'sushiboys.dev@gmail.com',
    subject: `SUSHIBOYS - お問合せがありました - ${subject}`,
    text: `以下の内容でお問い合わせがありました。\n\n件名: ${subject}\n送信者: ${name} (${email})\n\n${message}`,
    html: `
      <p>以下の内容でお問い合わせがありました。</p>
      <hr />
      <p><strong>送信者:</strong> ${name} (${email})</p>
      <p><strong>内容:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  };

  try {
    await sgMail.send([toUser, toAdmin]);
    return res.status(200).json({ message: 'メール送信完了' });
  } catch (err: unknown) {
    console.error(err);

    if (err instanceof Error) {
      console.error('SendGrid Error:', err.message);
    }

    if (typeof err === 'object' && err && 'response' in err) {
      const e = err as { response?: { body?: any } };
      console.error(e.response?.body);
    }

    return res.status(500).json({ message: 'メール送信に失敗しました。' });
  }
}
