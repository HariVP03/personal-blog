<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import type { PageData } from './$types';

  export let data: PageData;

  console.log({ data });
</script>

<head>
  <title>
    {data.blog.title}
  </title>
</head>

<h1>
  {data.blog.title}
</h1>
<p class="mb-16 text-sm">{data.blog.publishedAt}</p>

<SvelteMarkdown source={data.blog.body} />
