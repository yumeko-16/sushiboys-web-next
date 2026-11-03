import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from './AvatarAccordion.module.scss';

type Props = {
  heading: string;
  avatar: 'male' | 'female';
  children: ReactNode;
};

const AVATAR_IMAGES = {
  male: '/images/avatar-male.svg',
  female: '/images/avatar-female.svg',
};

export default function AvatarAccordion({ heading, avatar, children }: Props) {
  return (
    <details className={styles.addordion}>
      <summary className={styles.heading}>
        <Image src={AVATAR_IMAGES[avatar]} alt="" width={145} height={145} />
        {heading}
      </summary>

      <div className={styles.content}>{children}</div>
    </details>
  );
}
