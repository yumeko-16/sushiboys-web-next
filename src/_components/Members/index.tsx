import Image from 'next/image';
import styles from './index.module.scss';

const data = {
  contents: [
    {
      id: '1',
      image: {
        url: '/member_farmhouse.jpg',
        width: 480,
        height: 480,
      },
      name: 'FARMHOUSE',
      position: 'CEO',
      profile:
        '腹に赤子を宿している。いつも自分の腹をさすって語りかけているからきっとそうなのだろう。',
    },
    {
      id: '2',
      image: {
        url: '/member_santena.jpg',
        width: 480,
        height: 480,
      },
      name: 'サンテナ',
      position: 'COO',
      profile:
        '脳筋。三國無双でいうところの魏延。敵キャラとして出てくるCPUの魏延はエグい。',
    },
    {
      id: '3',
      image: {
        url: '/member_neo-yoshikawa.jpg',
        width: 480,
        height: 480,
      },
      name: 'neo yoshikawa',
      position: 'CTO',
      profile: '電話交換手。小説の中だと頻繁に惨殺される。',
    },
  ],
};

export default function Members() {
  return (
    <>
      {data.contents.length === 0 ? (
        <p>メンバーはいません。</p>
      ) : (
        <div>
          {data.contents.map((member) => (
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
