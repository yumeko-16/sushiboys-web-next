import type { ReactNode } from 'react';
import AvatarAccordion from '@/components/AvatarAccordion/AvatarAccordion';
import styles from './AvatarAccordionGroup.module.scss';

type Faq = {
  heading: string;
  avatar: 'male' | 'female';
  content: ReactNode;
};

const FAQ_LIST = [
  {
    heading: '忙しくてライブに行く時間がない',
    avatar: 'male',
    content: <p>自宅から注文可能です。</p>,
  },
  {
    heading: 'グッズ購入による家計の負担を減らしたい',
    avatar: 'female',
    content: (
      <>
        <p>
          まとめ買いで費用を賢く抑えた気になれます。
          <br />
          ぜひまとめ買いください。
        </p>
        <p>
          明日の天気は<em>晴れ</em>です。
        </p>
      </>
    ),
  },
] satisfies Faq[];

export default function AvatarAccordionGroup() {
  return (
    <ul className={styles.list}>
      {FAQ_LIST.map((faq) => (
        <li key={faq.heading}>
          <AvatarAccordion heading={faq.heading} avatar={faq.avatar}>
            {faq.content}
          </AvatarAccordion>
        </li>
      ))}
    </ul>
  );
}
