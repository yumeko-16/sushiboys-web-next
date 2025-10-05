import { createClient } from 'microcms-js-sdk';

const serviceDomain = process.env.SERVICE_DOMAIN;
const apiKey = process.env.API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error('Missing environment variables for MicroCMS');
}

export const client = createClient({
  serviceDomain,
  apiKey,
});

export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: 'news',
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log('~~ getPostBySlug ~~');
    console.log(err);
  }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'news',
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log('~~ getAllSlugs ~~');
    console.log(err);
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'news',
      queries: {
        fields:
          'title,slug,eyecatch.url,eyecatch.width,eyecatch.height,eyecatch.blurDataURL',
        orders: '-publishDate',
        limit: limit,
      },
    });

    return posts.contents;
  } catch (err) {
    console.log('~~ getAllPosts ~~');
    console.log(err);
  }
}
