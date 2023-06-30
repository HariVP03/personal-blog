<script>
  import '../app.css';
</script>

<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.background);
  }

  :global(h1, h2, h3, h4, h5, h6, h7) {
    color: theme(colors.text.headings);
  }
</style>
