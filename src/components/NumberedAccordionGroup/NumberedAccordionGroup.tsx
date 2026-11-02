import NumberedAccordion from '@/components/NumberedAccordion/NumberedAccordion';
import styles from './NumberedAccordionGroup.module.scss';

const FAQ_LIST = [
  {
    id: 'what',
    heading: 'SUSHIBOYSって何？',
    text: '音楽をお届けするグループです。',
  },
  {
    id: 'arrive',
    heading: 'グッズ購入後、何日で届く？',
    text: (
      <>
        地域によります。
        <br />
        気長にお待ちください。
      </>
    ),
  },
  {
    id: 'member',
    heading: 'メンバーは何人？',
    text: (
      <>
        地域によります。
        <br />
        気長にお待ちください。
      </>
    ),
  },
  {
    id: 'youtuber',
    heading: 'YouTuber？',
    text: (
      <>
        明日の天気は<em>晴れ</em>です。
      </>
    ),
  },
];

export default function NumberedAccordionGroup() {
  return (
    <ol className={styles.list}>
      {FAQ_LIST.map((faq) => (
        <li key={faq.id}>
          <NumberedAccordion heading={faq.heading} text={faq.text} />
        </li>
      ))}
    </ol>
  );
}
