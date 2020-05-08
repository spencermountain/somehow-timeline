<script>
  export let page = ''
  export let name = ''
</script>

<style>

</style>

{#if page === name}
  <slot />
{/if}
