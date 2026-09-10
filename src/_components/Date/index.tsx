import Image from 'next/image';
import ConvertDate from '@/_components/ConvertDate';
import styles from './index.module.scss';

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <div className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      <ConvertDate dateISO={date} />
    </div>
  );
}
