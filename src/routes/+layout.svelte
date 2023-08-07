<script lang="ts">
  import '../app.css';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import PhotoHeader from '$lib/components/photo-header.svelte';
  import { page } from '$app/stores';

  inject({ mode: dev ? 'development' : 'production' });

  const links: {
    href: string;
    text: string;
  }[] = [
    {
      href: 'https://twitter.com/haritheman',
      text: 'Twitter'
    },
    {
      href: 'https://www.instagram.com/hari_theman/',
      text: 'Instagram'
    }
  ];
</script>

<div class="lg:w-[40%] mx-auto px-6 py-16 md:w-[50%] sm:w-full">
  <PhotoHeader introductionHeader={$page.url.pathname === '/'} />
  <slot />

  <div class="flex flex-col w-full mt-8 animate-appear-in-y-once">
    <div class="w-full border-t-2 border-t-black" />
    <div class="flex justify-between items-center mt-4">
      <a href="/" class="hover:underline">
        <p class="text-sm">© 2023 Hari Vishnu</p>
      </a>
      <div class="flex gap-4">
        {#each links as { href, text }}
          <a {href} target="_blank" class="flex items-center gap-2 hover:underline">
            <p class="text-sm">{text}</p>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Outfit:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700;800;900&family=Roboto+Slab:wght@400;500;600;700;800;900&display=swap');

  :global(html) {
    background-color: theme(colors.background.main);
  }

  :global(h1, h2, h3, h4, h5, h6, h7) {
    font-family: theme(fontFamily.heading);
    color: theme(colors.text.headings);
    line-height: 44px;
    margin-bottom: 16px;
    margin-top: 12px;
  }

  :global(h1) {
    font-weight: 700;
    font-size: 36px;
  }

  :global(h2) {
    font-weight: 700;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    :global(h1) {
      font-size: 22px;
      line-height: 32px;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    :global(h2) {
      font-size: 20px;
      line-height: 28px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }

  :global(code) {
    font-family: theme(fontFamily.mono);
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: theme(colors.text.code);
  }

  :global(p, a) {
    font-family: theme(fontFamily.mono);
    font-size: 16px;
    line-height: 28px;
    font-weight: 500;
    color: theme(colors.text.paragraph);
  }
</style>
