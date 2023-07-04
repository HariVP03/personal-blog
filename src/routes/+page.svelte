<script lang="ts">
  import BlogCard from '../components/blog-card.svelte';
  import Icon from '@iconify/svelte';

  let staticBlogs: string[] = ['cock and ball torture', 'bdsm', 'margot robbie mommy'];
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
      src="/images/avatar.webp"
      alt="Person standing on McDonald's leg"
    />
    <h1>Hey, I’m Hari! <br /> A proud learning freak.</h1>
  </a>

  <p class="animate-appear-in-x-once">
    I'm a full-stack developer based in India. I have a passion for web design and love to create
    for web and mobile devices.
  </p>

  <a href="/contact" class="hover:underline gap-2 flex items-center animate-appear-in-x-once">
    <p>Get in touch</p>
    <Icon icon="ep:right" />
  </a>

  <div class="animate-appear-in-y-once">
    <div class="flex items-center justify-between py-4 border-b-2 border-black">
      <h1>Sexy blogs</h1>
    </div>

    {#each staticBlogs as title, i}
      <BlogCard {title} slug={i + ''} />
    {/each}
  </div>
</div>
