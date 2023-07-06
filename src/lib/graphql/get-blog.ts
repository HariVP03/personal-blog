import type { Blog } from '$lib/types/blog';

export const GET_BLOG = `
query GetBlog($slug:String) {

  blogPostCollection(where:{
    slug:$slug
  },limit:1){
    total
    items{
      title
      slug
      publishedAt
      body
      excerpt
    }
  }
}
`;

export const parseBlog = (data: any) => {
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
  })[0] as Blog;
};
