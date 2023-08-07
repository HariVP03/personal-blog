import { GET_BLOGS, parseBlogs } from '$lib/graphql';
import { client } from '$lib/server';

export async function load() {
  const blogs = parseBlogs(
    await client({
      query: GET_BLOGS,
      variables: {
        limit: 5
      }
    })
  );

  return { blogs };
}
