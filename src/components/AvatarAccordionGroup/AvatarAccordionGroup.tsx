import type { ReactNode } from 'react';
import AvatarAccordion from '@/components/AvatarAccordion/AvatarAccordion';
import styles from './AvatarAccordionGroup.module.scss';

type Faq = {
  id: string;
  heading: string;
  text: ReactNode[];
  avatar: 'male' | 'female';
};

const FAQ_LIST = [
  {
    id: 'busy',
    heading: '忙しくてライブに行く時間がない',
    text: ['自宅から注文可能です。'],
    avatar: 'male',
  },
  {
    id: 'householdBudgets',
    heading: 'グッズ購入による家計の負担を減らしたい',
    text: [
      <>
        まとめ買いで費用を賢く抑えた気になれます。
        <br />
        ぜひまとめ買いください。
      </>,
      <>
        明日の天気は<em>晴れ</em>です。
      </>,
    ],
    avatar: 'female',
  },
] satisfies Faq[];

export default function AvatarAccordionGroup() {
  return (
    <ul className={styles.list}>
      {FAQ_LIST.map((faq) => (
        <li key={faq.id}>
          <AvatarAccordion
            heading={faq.heading}
            text={faq.text}
            avatar={faq.avatar}
          />
        </li>
      ))}
    </ul>
  );
}
