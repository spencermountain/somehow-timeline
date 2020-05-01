<script>
  import { setContext } from 'svelte'
  import linear from './_linear'
  export let start = null
  export let end = null
  export let height = 800
  export let title = ''
  setContext('start', start)
  setContext('end', end)
  setContext('scale', val => {
    return linear(
      {
        world: [0, height],
        minmax: [start.epoch, end.epoch],
      },
      val
    )
  })
</script>

<style>
  :global(.part) {
    min-width: 2px;
    margin: 5px;
    min-height: 100%;
    /* background-color: lightgrey; */
  }
  .container {
    display: inline-flex;
    flex-direction: column;
    border: 1px solid steelblue;
  }
  .slot {
    position: relative;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border: 1px solid darkred;
  }
</style>

<div class="container">
  <div>{title}</div>
  <div class="slot" style="min-height:{height}px">
    <slot />
  </div>
</div>
