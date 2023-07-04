import { env } from '$env/dynamic/private';

interface ClientProps {
  query: string;
  variables: {
    [key: string]: any;
  };
}

export async function client({ query, variables }: ClientProps) {
  const r = await fetch(env.GRAPHQL_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  return (await r.json()).data;
}
