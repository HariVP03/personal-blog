import type { Blog } from '$lib/types/blog';

export const GET_BLOGS = `
  query GetBlogs($limit: Int = 4) {

    blogPostCollection(limit: $limit) {
      total
      items {
        title
        slug
        publishedAt
        body
        excerpt
      }
    }
  }
`;

export const parseBlogs = (data: any) => {
  const { blogPostCollection } = data;

  return blogPostCollection.items.map((item: any) => {
    const { title, slug, publishedAt, body, excerpt } = item;

    return {
      title,
      slug,
      publishedAt: new Date(publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      body,
      excerpt
    };
  }) as Blog[];
};
