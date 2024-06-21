<script lang="ts">
  export let introductionHeader: boolean = false;

  const src =
    'https://images.ctfassets.net/cfn4h6xzm2t4/6pAVkCV3jPSflDcquDpSec/b5aeed25e16030590510ae78b13d0bdf/4b3a25ad-a982-4363-af37-1cb802b1c5b9.jpg?h=500&fm=webp';
  const alt = 'Picture of a person standing in grass in black and white';
</script>

{#if !introductionHeader}
  <a class="animate-appear-in-x-once no-underline" href="/">
    <div class="flex gap-8 items-center animate-appear-in-x-once">
      <img
        width="120px"
        height="120px"
        class="rounded-full w-[120px] h-[120px] object-cover object-top mb-8"
        {src}
        {alt}
      />
      <h2>Hari Vishnu</h2>
    </div>
  </a>
{:else}
  <a class="animate-appear-in-x-once" href="/">
    <img
      width="175px"
      height="175px"
      class="rounded-full w-[175px] h-[175px] object-cover mb-8 object-top animate-appear-in-x-once"
      {src}
      {alt}
    />
    <h1 class="animate-appear-in-x-once mb-">
      Hey, I’m Hari! <br /> A proud learning freak.
    </h1>
  </a>
{/if}
