import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from './AvatarAccordion.module.scss';

type Props = {
  heading: string;
  text: ReactNode[];
  avatar: 'male' | 'female';
};

const AVATAR_IMAGES = {
  male: '/images/avatar-male.svg',
  female: '/images/avatar-female.svg',
};

export default function AvatarAccordion({ heading, text, avatar }: Props) {
  return (
    <details className={styles.wrapper}>
      <summary className={styles.heading}>
        <figure className={styles.avatar}>
          <Image src={AVATAR_IMAGES[avatar]} alt="" width={145} height={145} />
        </figure>
        {heading}
      </summary>

      <div className={styles.text}>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}
