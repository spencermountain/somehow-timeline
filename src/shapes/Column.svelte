<script>
  // import { fade } from 'svelte/transition'
  // in:fly={{ x: 200, duration: 500 }}
  export let width = ''
  export let label = ''
  export let title = ''
  label = label || title
</script>

<style>
  .column {
    flex: 1;
    position: relative;
  }
  .label {
    color: grey;
    font-size: 12px;
    background-color: #fbfbfb;
    display: block;
    z-index: 4;
    text-align: center;
  }
</style>

<div class="part column" style="">
  <div class="label">{label}</div>
  <slot />
</div>
