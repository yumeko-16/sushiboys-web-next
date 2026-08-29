import { MetadataRoute } from 'next';
import { getAllCategoryList, getAllNewsList } from '@/_libs/microcms';

const buildUrl = (path?: string) => `https://sushiboys350.com${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsContents = await getAllNewsList();
  const categoryContents = await getAllCategoryList();
  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/news/category/${content.id}`),
      lastModified: content.revisedAt,
    }),
  );
  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/about'),
      lastModified: now,
    },
    {
      url: buildUrl('/contact'),
      lastModified: now,
    },
    {
      url: buildUrl('/discography'),
      lastModified: now,
    },
    {
      url: buildUrl('/goods'),
      lastModified: now,
    },
    {
      url: buildUrl('/news'),
      lastModified: now,
    },
    {
      url: buildUrl('/picture'),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
  ];
}
