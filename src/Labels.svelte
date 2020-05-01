<script>
  export let data = []
</script>

<style>
  .label {
    margin-left: 25px !important;
    font-size: 20px;
  }
</style>

<div class="part">
  {#each data as label}
    <div class="label">{label}</div>
  {/each}
</div>
