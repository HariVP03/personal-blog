import { client } from '$lib/server';
import { GET_BLOG, parseBlog } from '../../../graphql';

export async function load({ params }) {
  const blog = parseBlog(
    await client({
      query: GET_BLOG,
      variables: {
        slug: params.slug
      }
    })
  );

  console.log({ blog });

  return { blog };
}
