'use client';

import { useActionState } from 'react';
import { createContactData } from '@/_actions/contact';
import styles from './index.module.scss';

const initialState = {
  status: '',
  message: '',
};

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);
  console.log(state);

  if (state.status === 'success') {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            姓
          </label>
          <input
            id="lastname"
            className={styles.textfield}
            type="text"
            name="lastname"
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input
            id="firstname"
            className={styles.textfield}
            type="text"
            name="firstname"
          />
        </div>
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
        </label>
        <input
          id="company"
          className={styles.textfield}
          type="text"
          name="company"
        />
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input
          id="email"
          className={styles.textfield}
          type="text"
          name="email"
        />
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ
        </label>
        <textarea id="message" className={styles.textarea} name="message" />
      </div>

      <div className={styles.actions}>
        {state.status === 'error' && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input className={styles.button} type="submit" value="送信する" />
      </div>
    </form>
  );
}
