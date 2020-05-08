<script>
  // import { fade } from 'svelte/transition'
  // in:fly={{ x: 200, duration: 500 }}
  export let width = '30px'
  export let label = ''
</script>

<style>
  .column {
    position: relative;
  }
  .label {
    color: grey;
    font-size: 12px;
  }
</style>

<div class="part column" style="width:{width};">
  <div class="label">{label}</div>
  <slot />
</div>
