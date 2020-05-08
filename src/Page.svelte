<script>
  export let page = ''
  export let name = ''
</script>

<style>

</style>

{#if page === name}
  <div>{name}</div>
{/if}
