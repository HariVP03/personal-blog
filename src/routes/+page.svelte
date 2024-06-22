<script lang="ts">
  import BlogCard from '$lib/components/blog-card.svelte';
  import Icon from '@iconify/svelte';
  import type { PageData } from './$types';
  import Meta from '$lib/components/meta.svelte';

  export let data: PageData;
</script>

<Meta />

<div class="flex flex-col gap-8">
  <p class="animate-appear-in-x-once">
    I'm a software developer based in India. I love to transform people's lives and businesses
    through software!
  </p>

  <a href="/contact" class="hover:underline no-underline decoration-black gap-2 flex items-center animate-appear-in-x-once">
    <p>Get in touch</p>
    <Icon icon="ep:right" />
  </a>

  <div class="animate-appear-in-y-once">
    <div class="flex items-center justify-between py-4 border-b-2 border-black">
      <h1>Sexy blogs</h1>
    </div>

    {#each data.blogs as blog}
      <BlogCard title={blog.title} slug={blog.slug} />
    {/each}
  </div>
</div>
