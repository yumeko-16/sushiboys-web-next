import Image from 'next/image';
import ConvertDate from '@/components/ConvertDate/ConvertDate';
import styles from './Date.module.scss';

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <div className={styles.date}>
      <Image
        src="/images/clock.svg"
        alt=""
        width={16}
        height={16}
        loading="eager"
      />
      <ConvertDate dateISO={date} />
    </div>
  );
}
