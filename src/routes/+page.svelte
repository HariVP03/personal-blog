<script lang="ts">
  import BlogCard from '$lib/components/blog-card.svelte';
  import Icon from '@iconify/svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<head>
  <title>Hari Vishnu Parashar - Full Stack Developer</title>
</head>

<div class="flex flex-col gap-8">
  <a class="animate-appear-in-x-once" href="/">
    <img
      width="175px"
      height="175px"
      class="rounded-full w-[175px] h-[175px] object-cover object-top mb-8"
      src="https://images.ctfassets.net/cfn4h6xzm2t4/6pAVkCV3jPSflDcquDpSec/a2813bf762761b0e90d4525a222feaf1/IMG_3783-modified.webp?h=250&w=250&q=50&fm=webp"
      alt="Person standing on McDonald's leg"
    />
    <h1>Hey, I’m Hari! <br /> A proud learning freak.</h1>
  </a>

  <p class="animate-appear-in-x-once">
    I'm a software developer based in India. I love to transform people's lives and businesses
    through software!
  </p>

  <a href="/contact" class="hover:underline gap-2 flex items-center animate-appear-in-x-once">
    <p>Get in touch</p>
    <Icon icon="ep:right" />
  </a>

  <div class="animate-appear-in-y-once">
    <div class="flex items-center justify-between py-4 border-b-2 border-black">
      <h1>Sexy blogs</h1>
    </div>

    {#each data.blogs as blog, i}
      <BlogCard title={blog.title} slug={blog.slug} />
    {/each}
  </div>
</div>
