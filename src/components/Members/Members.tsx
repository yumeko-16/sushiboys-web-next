import Image from 'next/image';
import styles from './Members.module.scss';

const MEMBERS = [
  {
    id: '1',
    image: {
      url: '/images/member_farmhouse.jpg',
      alt: '',
      width: 480,
      height: 480,
    },
    name: 'FARMHOUSE',
    position: '俺がCEOだ 舐めるな',
    profile: 'いつも自分の腹をさすさすしている。ソックスは膝上まで上げる派。',
  },
  {
    id: '2',
    image: {
      url: '/images/member_santena.jpg',
      alt: '',
      width: 480,
      height: 480,
    },
    name: 'サンテナ',
    position: 'ザ・コクピット',
    profile:
      '脳筋。三國無双でいうところの魏延。五丈原の戦いに出てくるCPUの魏延の強さは異常。',
  },
  {
    id: '5',
    image: {
      url: '/images/member_neo-yoshikawa.jpg',
      alt: '',
      width: 480,
      height: 480,
    },
    name: 'neo yoshikawa',
    position: '電話交換手',
    profile:
      '小説の中だと頻繁に惨殺されるし、ゲームのデータ消されがち。つけ麺に厳しい。',
  },
];

export default function Members() {
  return (
    <>
      {MEMBERS.length === 0 ? (
        <p>メンバーが登録されていません。</p>
      ) : (
        <div>
          {MEMBERS.map((member) => (
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
