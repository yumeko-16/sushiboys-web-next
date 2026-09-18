import Image from 'next/image';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/_components/TwoColumn';
import Contact from '@/_components/Contact';
import styles from './index.module.scss';

type Props = {
  heading: string;
  contents: {
    image: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
  }[];
};

export default function Pictures({ heading, contents }: Props) {
  return (
    <article>
      <TwoColumn>
        <TwoColumnMain>
          <h1>{heading}</h1>

          {contents.length === 0 ? (
            <p>写真はありません。</p>
          ) : (
            <div>
              {contents.map((item, index) => (
                <figure key={index} className={styles.image}>
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                  />
                </figure>
              ))}
            </div>
          )}
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </article>
  );
}
