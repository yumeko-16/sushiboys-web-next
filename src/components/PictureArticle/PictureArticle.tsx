import Image from 'next/image';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import Contact from '@/components/Contact/Contact';
import styles from './PictureArticle.module.scss';

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

export default function PictureArticle({ heading, contents }: Props) {
  return (
    <article>
      <TwoColumn>
        <TwoColumn.Main>
          <h1>{heading}</h1>

          {contents.length > 0 && (
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
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </article>
  );
}
