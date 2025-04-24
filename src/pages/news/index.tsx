import Meta from '@/components/meta/meta';
import Hero from '@/components/hero/hero';
import Container from '@/components/container/container';

export default function News() {
  return (
    <>
      <Meta
        pageTitle="NEWS"
        pageDesc="SUSHIBOYSニュース。ライブ出演、リリース情報、メディア掲載等の最新情報をご覧いただけます。"
      />

      <Hero heading="News" />
    </>
  );
}
