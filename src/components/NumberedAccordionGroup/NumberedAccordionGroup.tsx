import NumberedAccordion from '@/components/NumberedAccordion/NumberedAccordion';
import styles from './NumberedAccordionGroup.module.scss';

const FAQ_LIST = [
  {
    heading: 'SUSHIBOYSって何？',
    content: <p>音楽をお届けするグループです。</p>,
  },
  {
    heading: 'グッズ購入後、何日で届く？',
    content: (
      <p>
        地域によります。
        <br />
        気長にお待ちください。
      </p>
    ),
  },
  {
    heading: 'メンバーは何人？',
    content: (
      <p>
        地域によります。
        <br />
        気長にお待ちください。
      </p>
    ),
  },
  {
    heading: 'YouTuber？',
    content: (
      <p>
        明日の天気は<em>晴れ</em>です。
      </p>
    ),
  },
];

export default function NumberedAccordionGroup() {
  return (
    <ol className={styles.list}>
      {FAQ_LIST.map((faq) => (
        <li key={faq.heading}>
          <NumberedAccordion heading={faq.heading}>
            {faq.content}
          </NumberedAccordion>
        </li>
      ))}
    </ol>
  );
}
