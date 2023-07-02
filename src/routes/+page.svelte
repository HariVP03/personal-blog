<script lang="ts">
  import BlogCard from '../components/blog-card.svelte';

  let staticBlogs: string[] = ['cock and ball torture', 'bdsm', 'margot robbie mommy'];
</script>

<head>
  <title> Hari Vishnu Parashar - Full Stack Developer </title>
</head>

<div class="flex flex-col gap-8">
  <a href="/">
    <img
      width="175px"
      height="175px"
      class="rounded-full w-[175px] h-[175px] object-cover object-top mb-8"
      src="/images/avatar.webp"
      alt="Person standing on McDonald's leg"
    />
    <h1>Hey, I’m Hari! <br /> A proud learning freak.</h1>
  </a>

  <p>
    I'm a full-stack developer based in India. I have a passion for web design and love to create
    for web and mobile devices.
  </p>

  <a href="/contact">Get in touch </a>

  <div>
    <div class="flex items-center justify-between py-4 border-b-2 border-black">
      <h1>Sexy blogs</h1>
    </div>

    {#each staticBlogs as title, i}
      <BlogCard {title} slug={i + ''} />
    {/each}
  </div>
</div>
