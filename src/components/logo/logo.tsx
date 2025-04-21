import { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.webp';
import styles from './logo.module.scss';

export default function Logo() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <figure className={styles.logo}>
      <Image
        className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
        src={logo}
        alt="SUSHIBOYS"
        layout="responsive"
        sizes="(min-width: 500px) 500px, 80vw"
        priority
        onLoad={() => setIsImageLoaded(true)}
      />
    </figure>
  );
}
