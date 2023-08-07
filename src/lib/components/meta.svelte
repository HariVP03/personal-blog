<script lang="ts">
  export let title: string = 'Hari Vishnu Parashar - Full Stack Developer';
  export let description: string =
    "Hey! I'm Hari. A software developer based in India. I love to transform people's lives and businesses through software!";
  export let image: string =
    'https://images.ctfassets.net/cfn4h6xzm2t4/3fNW9JMUdC1biiq2uoHrOl/bde361df45015517d3a6608acc3d81de/2.png';

  export let includeArticleMetaTags: boolean = false;
  export let publishedTime = '2021-08-01T00:00:00+00:00';

  const author = 'Hari Vishnu Parashar';
  const twitterCreator = '@haritheman';
  const twitterSite = '@haritheman';

  export let slug = '';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.harivishnu.com/" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.harivishnu.com/" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />

  <!-- Article meta tags -->
  {#if includeArticleMetaTags}
    <meta name="title" property="og:title" content={title} />
    <meta name="description" property="og:description" content={description} />
    <meta property="article:published_time" content={publishedTime} />
    <meta property="article:author" content={author} />
    <meta name="author" content={author} />
    <meta property="og:site_name" content={title} />
    <meta property="twitter:site" content={twitterCreator} />
    <meta property="twitter:creator" content={twitterSite} />
    <link rel="canonical" href={`https://www.harivishnu.com/${slug}`} />
  {/if}
</svelte:head>
