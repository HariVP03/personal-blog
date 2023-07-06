import { client } from '$lib/server';
import { GET_BLOG, parseBlog } from '$lib/graphql';

export async function load({ params }: any) {
  const blog = parseBlog(
    await client({
      query: GET_BLOG,
      variables: {
        slug: params.slug
      }
    })
  );

  return { blog };
}
