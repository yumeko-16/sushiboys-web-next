import Image from 'next/image';
import Container from '@/components/container/container';
import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import TwoColumn from '@/components/twoColumn/twoColumn';
import Contact from '@/components/contact/contact';

import img001 from '@/images/picture/look/summer-vacation/001.webp';
import img002 from '@/images/picture/look/summer-vacation/002.webp';
import img003 from '@/images/picture/look/summer-vacation/003.webp';
import img004 from '@/images/picture/look/summer-vacation/004.webp';
import img005 from '@/images/picture/look/summer-vacation/005.webp';
import img006 from '@/images/picture/look/summer-vacation/006.webp';
import img007 from '@/images/picture/look/summer-vacation/007.webp';
import img008 from '@/images/picture/look/summer-vacation/008.webp';
import img009 from '@/images/picture/look/summer-vacation/009.webp';
import img010 from '@/images/picture/look/summer-vacation/010.webp';
import img011 from '@/images/picture/look/summer-vacation/011.webp';
import img012 from '@/images/picture/look/summer-vacation/012.webp';
import img013 from '@/images/picture/look/summer-vacation/013.webp';
import img014 from '@/images/picture/look/summer-vacation/014.webp';
import img015 from '@/images/picture/look/summer-vacation/015.webp';
import img016 from '@/images/picture/look/summer-vacation/016.webp';
import img017 from '@/images/picture/look/summer-vacation/017.webp';
import img018 from '@/images/picture/look/summer-vacation/018.webp';
import img019 from '@/images/picture/look/summer-vacation/019.webp';
import img020 from '@/images/picture/look/summer-vacation/020.webp';
import img021 from '@/images/picture/look/summer-vacation/021.webp';
import img022 from '@/images/picture/look/summer-vacation/022.webp';
import img023 from '@/images/picture/look/summer-vacation/023.webp';
import img024 from '@/images/picture/look/summer-vacation/024.webp';
import img025 from '@/images/picture/look/summer-vacation/025.webp';
import img026 from '@/images/picture/look/summer-vacation/026.webp';
import img027 from '@/images/picture/look/summer-vacation/027.webp';
import img028 from '@/images/picture/look/summer-vacation/028.webp';
import img029 from '@/images/picture/look/summer-vacation/029.webp';
import img030 from '@/images/picture/look/summer-vacation/030.webp';
import img031 from '@/images/picture/look/summer-vacation/031.webp';
import img032 from '@/images/picture/look/summer-vacation/032.webp';
import img033 from '@/images/picture/look/summer-vacation/033.webp';
import img034 from '@/images/picture/look/summer-vacation/034.webp';
import img035 from '@/images/picture/look/summer-vacation/035.webp';
import img036 from '@/images/picture/look/summer-vacation/036.webp';
import img037 from '@/images/picture/look/summer-vacation/037.webp';
import img038 from '@/images/picture/look/summer-vacation/038.webp';
import img039 from '@/images/picture/look/summer-vacation/039.webp';
import img040 from '@/images/picture/look/summer-vacation/040.webp';
import img041 from '@/images/picture/look/summer-vacation/041.webp';

export default function Picture() {
  const images = [
    img001,
    img002,
    img003,
    img004,
    img005,
    img006,
    img007,
    img008,
    img009,
    img010,
    img011,
    img012,
    img013,
    img014,
    img015,
    img016,
    img017,
    img018,
    img019,
    img020,
    img021,
    img022,
    img023,
    img024,
    img025,
    img026,
    img027,
    img028,
    img029,
    img030,
    img031,
    img032,
    img033,
    img034,
    img035,
    img036,
    img037,
    img038,
    img039,
    img040,
    img041,
  ];

  return (
    <Container>
      <Meta pageTitle="夏休み編" pageDesc="SUSHIBOYS LOOK 2022" />

      <Hero heading="夏休み編" />

      <article>
        <TwoColumn>
          <TwoColumn.Main>
            <figure>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`夏休み編 LOOK 2022 - No.${index + 1}`}
                  width={5000}
                  height={2806}
                  sizes="100vw"
                />
              ))}
            </figure>
          </TwoColumn.Main>

          <TwoColumn.Sidebar>
            <Contact />
          </TwoColumn.Sidebar>
        </TwoColumn>
      </article>
    </Container>
  );
}
