<script lang="ts">
  import Icon from '@iconify/svelte';

  export let title: string;
  export let slug: string;
</script>

<a href={`/blog/${slug}`} class="no-underline">
  <div class="flex w-full items-center gap-2 justify-between py-4 border-b-2 border-black">
    <p>
      {title}
    </p>

    <div class="gap-2 flex items-center">
      <p>Read</p>
      <Icon icon="ep:right" />
    </div>
  </div>
</a>
