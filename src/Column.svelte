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
    background-color: #fbfbfb;
    display: block;
    z-index: 4;
  }
</style>

<div class="part column" style="width:{width};">
  <div class="label">{label}</div>
  <slot />
</div>
