<script lang="ts">
  import Prism from 'prismjs';

  export let text: string;
  export let lang: string;
</script>

<div class="whitespace-pre-wrap font-mono my-8 bg-gray-100 p-2 rounded-md">
  {@html Prism.highlight(text, Prism.languages[lang], lang)}
</div>

<svelte:head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
    rel="stylesheet"
  />
</svelte:head>
