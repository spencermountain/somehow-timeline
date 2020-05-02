<script>
  import { setContext } from 'svelte'
  import spacetime from 'spacetime'
  import colors from './_lib/colors'
  import scale from './_lib/scale'
  export let start = null
  export let end = null
  export let height = 800
  export let title = ''
  start = spacetime(start)
  end = spacetime(end)
  setContext('height', height)
  setContext('start', start)
  setContext('end', end)
  setContext('colors', colors)
  setContext('scale', val => {
    return scale(
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
  }
  .slot {
    position: relative;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
</style>

<div class="container">
  <div>{title}</div>
  <div class="slot" style="min-height:{height}px">
    <slot />
  </div>
</div>
