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

  const { email, message } = req.body;

  const msg = {
    to: email,
    from: 'sushiboys.dev@gmail.com',
    subject: 'お問合せありがとうございました。',
    text: `お問合せを受け付けました。回答をお待ちください。\n\n${message}`,
    html: `<p>お問合せを受け付けました。回答をお待ちください。</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
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
