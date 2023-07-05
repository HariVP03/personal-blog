<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import type { PageData } from './$types';
  import BlogP from '$lib/components/blog-p.svelte';
  import BlogCode from '$lib/components/blog-code.svelte';
  import BlogCodespan from '$lib/components/blog-codespan.svelte';

  export let data: PageData;
</script>

<head>
  <title>
    {data.blog.title}
  </title>
</head>

<a class="animate-appear-in-x-once" href="/">
  <div class="flex gap-8 items-center">
    <img
      width="120px"
      height="120px"
      class="rounded-full w-[120px] h-[120px] object-cover object-top mb-8"
      src="https://images.ctfassets.net/cfn4h6xzm2t4/6pAVkCV3jPSflDcquDpSec/a2813bf762761b0e90d4525a222feaf1/IMG_3783-modified.webp?h=180&w=180&q=100&fm=webp"
      alt="Person standing on McDonald's leg"
    />
    <h1>Hari Vishnu</h1>
  </div>
</a>

<h1 class="mt-1 animate-appear-in-y-once">
  {data.blog.title}
</h1>
<p class="mb-7 text-sm animate-appear-in-y-once">{data.blog.publishedAt}</p>

<div class="mb-16 text-sm animate-appear-in-y-once font-serif">
  <SvelteMarkdown
    renderers={{
      paragraph: BlogP,
      code: BlogCode,
      codespan: BlogCodespan
    }}
    source={data.blog.body}
  />
</div>
