<script lang="ts">
  export let raw: string;
</script>

<code class="bg-gray-100 rounded-md text-sm px-1">{raw.replace(/`/g, '')}</code>
