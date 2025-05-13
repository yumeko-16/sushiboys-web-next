type Props = {
  slug: string;
  title: string;
};

export function prevNextPost(
  allSlugs: Props[],
  currentSlug: string,
): [Props, Props] {
  const numberOfPosts = allSlugs.length;

  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  const prevPost =
    index + 1 === numberOfPosts ? { title: '', slug: '' } : allSlugs[index + 1];

  const nextPost = index === 0 ? { title: '', slug: '' } : allSlugs[index - 1];

  return [prevPost, nextPost];
}
