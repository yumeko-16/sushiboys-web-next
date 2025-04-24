import ConvertDate from '@/components/convertDate/convertDate';
import styles from './postHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

type Props = {
  title: string;
  publish?: string;
};

export default function PostHeader({ title, publish = '' }: Props) {
  return (
    <div className={styles.stack}>
      <h1 className={styles.title}>{title}</h1>
      {publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  );
}
