import Image from 'next/image';
import styles from './index.module.scss';

type Props = {
  contents: {
    id: string;
    image: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    name: string;
    position: string;
    profile: string;
  }[];
};

export default function Members({ contents }: Props) {
  return (
    <>
      {contents.length === 0 ? (
        <p>メンバーが登録されていません。</p>
      ) : (
        <div>
          {contents.map((member) => (
            <article key={member.id} className={styles.member}>
              <figure className={styles.image}>
                <Image
                  src={member.image.url}
                  alt=""
                  width={member.image.width}
                  height={member.image.height}
                  priority
                />
              </figure>

              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
