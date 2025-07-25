import type { StaticImageData } from 'next/image';
import ep350Image from '@/images/discography/ep/350.jpg';
import nigiriImage from '@/images/discography/ep/nigiri.webp';
import shindarahoneImage from '@/images/discography/ep/shindarahone.jpg';
import souonshuImage from '@/images/discography/ep/souonshu.png';
import wasabiImage from '@/images/discography/ep/wasabi.jpg';
import paddleImage from '@/images/discography/farmhouse/ep/paddle.webp';
import pedalImage from '@/images/discography/farmhouse/ep/pedal.jpg';
import kutsushitaImage from '@/images/discography/farmhouse/single/kutsushita.webp';
import tokyoFlatSeatImage from '@/images/discography/farmhouse/single/tokyo-flat-seat.webp';
import wallImage from '@/images/discography/farmhouse/single/wall.jpg';
import lumosImage from '@/images/discography/feat/lumos-makishima.webp';
import pocketFullOfGumImage from '@/images/discography/feat/pocket-full-of-gum.jpg';
import gariImage from '@/images/discography/record/gari.webp';
import recordShindarahoneImage from '@/images/discography/record/shindarahone.webp';
import iWantACarImage from '@/images/discography/santena/ep/i-want-a-car.png';
import drugImage from '@/images/discography/single/drug.jpg';
import kinishinaiImage from '@/images/discography/single/kinishinai.webp';
import kousokudouroImage from '@/images/discography/single/kousokudouro.jpg';
import nandemodekiruImage from '@/images/discography/single/nandemodekiru.jpg';
import newYearCard2023UsagiImage from '@/images/discography/single/new-year-card-2023-usagi.webp';

export type DiscographyItem = {
  title?: string;
  desc?: string;
  image?: StaticImageData;
  type?: string;
  release?: string;
  price?: string;
  link?: string;
  songs?: string[];
  bonusTracks?: string[];
};

export const discographyData: Record<
  string,
  Record<string, DiscographyItem>
> = {
  ep: {
    350: {
      title: '350',
      desc: 'Shopping Cart Racer 味の素 Drivin 8月32日 遊戯王 USB',
      image: ep350Image,
      type: 'EP',
      release: '2018.11.21',
      price: '￥1,500 (excluding tax)',
      link: 'https://linkco.re/3VvHV05z',
      songs: [
        'Shopping Cart Racer',
        '味の素',
        'Drivin',
        '8月32日',
        '遊戯王',
        'USB',
      ],
      bonusTracks: ['とりま'],
    },
    nigiri: {
      title: 'NIGIRI',
      desc: 'Catch ur dream 遊園地 ダンボルギーニ OMG だけど元気 思ったよりも ブルーハワイ Yossy Peace club 軽自動車 NIGIRI',
      image: nigiriImage,
      type: 'EP',
      release: '2017.10.15',
      price: '￥2,000 (excluding tax)',
      link: 'https://linkco.re/nQ6dUExe',
      songs: [
        'Catch ur dream',
        '遊園地',
        'ダンボルギーニ',
        'OMG',
        'だけど元気',
        '思ったよりも',
        'ブルーハワイ',
        'Yossy',
        'Peace club',
        '軽自動車',
        'NIGIRI',
      ],
    },
    shindarahone: {
      title: '死んだら骨',
      desc: '死んだら骨 BAND-AID save DRUG SANAGI 食品添加物 APP STORE 高速道路',
      image: shindarahoneImage,
      type: 'EP',
      release: '2019.10.25',
      price: '￥1,500 (excluding tax)',
      link: 'https://linkco.re/hSPNhvU1',
      songs: [
        '死んだら骨',
        'BAND-AID',
        'save',
        'DRUG',
        'SANAGI',
        '食品添加物',
        'APP STORE',
        '高速道路',
      ],
    },
    souonshu: {
      title: 'SUSHIBOYSの騒音集 VOL.1',
      desc: 'DA-DA-DA SUIMIN 幽霊です テニス ISCREAM 疲れました LOUD 必要ない',
      image: souonshuImage,
      type: 'EP',
      release: '2020.7.15',
      price: '￥2,000 (excluding tax)',
      link: 'https://linkco.re/V2Xdq9e9',
      songs: [
        'DA-DA-DA',
        'SUIMIN',
        '幽霊です',
        'テニス',
        'ISCREAM',
        '疲れました',
        'LOUD',
        '必要ない',
      ],
      bonusTracks: ['表面張力', 'アメンボ'],
    },
    wasabi: {
      title: 'WASABI',
      desc: 'KUNG FU アヒルボート ゲートボーラー 旅に出よう 問題ねぇ ママチャリ remix',
      image: wasabiImage,
      type: 'EP',
      release: '2018.4.25',
      price: '￥1,500 (excluding tax)',
      link: 'https://linkco.re/PATXCCSn',
      songs: [
        'KUNG FU',
        'アヒルボート',
        'ゲートボーラー',
        '旅に出よう',
        '問題ねぇ',
        'ママチャリ remix',
      ],
    },
  },
  single: {
    drug: {
      title: 'DRUG',
      desc: 'DRUG',
      image: drugImage,
      type: 'Single',
      release: '2019.4.8',
      link: 'https://linkco.re/Zf8ChS9M',
      songs: ['DRUG'],
    },
    kinishinai: {
      title: '木にしない',
      desc: '木にしない',
      image: kinishinaiImage,
      type: 'Single',
      release: '2023',
      link: 'https://linkco.re/A9zCTCbN',
      songs: ['木にしない'],
    },
    kousokudouro: {
      title: '高速道路',
      desc: '高速道路',
      image: kousokudouroImage,
      type: 'Single',
      release: '2019.9.13',
      link: 'https://linkco.re/6axQTARU',
      songs: ['高速道路'],
    },
    nandemodekiru: {
      title: 'なんでもできる',
      desc: 'なんでもできる',
      image: nandemodekiruImage,
      type: 'Single',
      release: '2018.1.13',
      link: 'https://music.apple.com/jp/album/1333476632?app=music',
      songs: ['なんでもできる'],
    },
    'new-year-card-2023-usagi': {
      title: '年賀状2023(兎)',
      desc: '年賀状2023(兎)',
      image: newYearCard2023UsagiImage,
      type: 'Single',
      release: '2023',
      link: 'https://linkco.re/xaye8XYu',
      songs: ['年賀状2023(兎)'],
    },
  },
  feat: {
    'lumos-makishima': {
      title: 'ルーモス牧島 feat.SUSHIBOYS',
      desc: 'ルーモス牧島 feat.SUSHIBOYS',
      image: lumosImage,
      type: 'feat.',
      release: '2021.3.31',
      price: '未定',
      link: 'https://linkco.re/taM16dGs',
      songs: ['ルーモス牧島 feat.SUSHIBOYS'],
    },
    'pocket-full-of-gum': {
      title: 'pocket full of gum feat.SUSHIBOYS',
      desc: 'pocket full of gum feat.SUSHIBOYS',
      image: pocketFullOfGumImage,
      type: 'feat.',
      release: '2021.7.7',
      link: 'https://big-up.style/FIVhHUzYxk',
      songs: ['pocket full of gum feat.SUSHIBOYS'],
    },
  },
  record: {
    gari: {
      title: 'GARI',
      desc: '軽自動車 なんでもできる ダンボルギーニ',
      image: gariImage,
      type: 'Record',
      release: '2018.3.24',
      price: '￥2,200 (excluding tax)',
      songs: ['軽自動車', 'なんでもできる', 'ダンボルギーニ'],
    },
    shindarahone: {
      title: '死んだら骨 / LOUD',
      desc: 'LOUD 死んだら骨',
      image: recordShindarahoneImage,
      type: 'Record',
      release: '2022.1.28',
      price: '￥1,800 (excluding tax)',
      songs: ['LOUD', '死んだら骨'],
    },
  },
  'farmhouse-ep': {
    pedal: {
      title: 'PEDAL',
      desc: 'swim リスタート (feat. kou-kei) 緑茶 ネットサーフィン ママチャリ SANAGI (feat. SANTENA) BABY Good Day (feat. SANTENA & O.D.A) アップデート (feat. SUSHIBOYS)',
      image: pedalImage,
      type: 'EP',
      release: '2018.3.20',
      price: '￥2,000 (excluding tax)',
      link: 'https://linkco.re/ftD6QScu',
      songs: [
        'swim',
        'リスタート (feat. kou-kei)',
        '緑茶',
        'ネットサーフィン',
        'ママチャリ',
        'SANAGI (feat. SANTENA)',
        'BABY',
        'Good Day (feat. SANTENA & O.D.A)',
        'アップデート (feat. SUSHIBOYS)',
      ],
    },
    paddle: {
      title: 'Paddle',
      desc: '東京フラットシート Sunflower (feat. Jeter) WALL (feat. Hys plasma) SLEEP SLEEP SHEEP Knock! Knock! Knock! RAP RAP RAP KIRA KIRA カイエン青山 靴下 (feat. kojikoji) 絵 朝が来るまで',
      image: paddleImage,
      type: 'EP',
      release: '2021.8.1',
      price: '￥2,000 (excluding tax)',
      link: 'https://linkco.re/UnpqPhgp',
      songs: [
        '東京フラットシート',
        'Sunflower (feat. Jeter)',
        'WALL (feat. Hys plasma)',
        'SLEEP SLEEP SHEEP',
        'Knock! Knock! Knock!',
        'RAP RAP RAP',
        'KIRA KIRA',
        'カイエン青山',
        '靴下 (feat. kojikoji)',
        '絵',
        '朝が来るまで',
      ],
    },
  },
  'farmhouse-single': {
    kutsushita: {
      title: '靴下',
      desc: '靴下',
      image: kutsushitaImage,
      type: 'Single',
      release: '2021.1.25',
      link: 'https://linkco.re/cFqNSan5',
      songs: ['靴下'],
    },
    'tokyo-flat-seat': {
      title: '東京フラットシート',
      desc: '東京フラットシート',
      image: tokyoFlatSeatImage,
      type: 'Single',
      release: '2021.7.21',
      link: 'https://linkco.re/cFqNSan5',
      songs: ['東京フラットシート'],
    },
    wall: {
      title: 'WALL',
      desc: 'WALL',
      image: wallImage,
      type: 'Single',
      release: '2021.3.26',
      link: 'https://linkco.re/S8HQP7cX',
      songs: ['WALL'],
    },
  },
  'santena-ep': {
    'i-want-a-car': {
      title: 'I want a car',
      desc: 'Sky Dive 1LDK DORANEKO マグナ50 PeroPeroCandy!! YANI',
      image: iWantACarImage,
      type: 'EP',
      release: '2021.4.12',
      price: '未定',
      link: 'https://linkco.re/hcN75hCe',
      songs: [
        'Sky Dive',
        '1LDK',
        'DORANEKO',
        'マグナ50',
        'PeroPeroCandy!!',
        'YANI',
      ],
    },
  },
};
