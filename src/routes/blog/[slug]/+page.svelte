<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import type { PageData } from './$types';
  import P from '$lib/components/renderers/p.svelte';
  import Code from '$lib/components/renderers/code.svelte';
  import Codespan from '$lib/components/renderers/codespan.svelte';
  import Strong from '$lib/components/renderers/strong.svelte';
  import Meta from '$lib/components/meta.svelte';

  export let data: PageData;
</script>

<Meta
  title={data.blog.title}
  description={data.blog.excerpt}
  includeArticleMetaTags={true}
  publishedTime={new Date(data.blog.publishedAt).toISOString()}
  slug={data.blog.slug}
/>

<article>
  <h1 class="mt-1 animate-appear-in-y-once">
    {data.blog.title}
  </h1>
  <p class="mb-7 text-sm animate-appear-in-y-once">{data.blog.publishedAt}</p>

  <div class="mb-16 text-sm animate-appear-in-y-once font-serif">
    <SvelteMarkdown
      renderers={{
        paragraph: P,
        code: Code,
        codespan: Codespan,
        strong: Strong,
        list: P
      }}
      source={data.blog.body}
    />
  </div>
</article>
