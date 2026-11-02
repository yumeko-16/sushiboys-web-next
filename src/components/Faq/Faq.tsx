import AvatarAccordionGroup from '../AvatarAccordionGroup/AvatarAccordionGroup';
import NumberedAccordionGroup from '@/components/NumberedAccordionGroup/NumberedAccordionGroup';
import styles from './Faq.module.scss';

export default function Faq() {
  return (
    <div className={styles.wrapper}>
      <section>
        <AvatarAccordionGroup />
      </section>

      <section>
        <NumberedAccordionGroup />
      </section>
    </div>
  );
}
