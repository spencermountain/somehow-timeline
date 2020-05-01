<script>
  export let days = []
  export let data = []
</script>

<style>
  .day {
    font-size: 8px;
    margin: 0px;
    height: 4px;
  }
</style>

<div>
  {#each days as iso, i}
    <div class="day">
      {#if data[iso]}
        <span>{data[iso]}</span>
      {:else}
        <span />
      {/if}
    </div>
  {/each}
</div>
