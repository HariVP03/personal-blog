<script>
  import '../app.css';
</script>

<div class="lg:w-[40%] mx-auto px-6 py-16 md:w-[50%] sm:w-full">
  <slot />
</div>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Outfit:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto+Slab&display=swap');
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

  :global(code) {
    font-family: theme(fontFamily.mono);
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: theme(colors.text.code);
  }

  :global(p, a) {
    font-family: theme(fontFamily.mono);
    font-family: 16px;
    line-height: 28px;
    font-weight: 500;
    color: theme(colors.text.paragraph);
  }
</style>
