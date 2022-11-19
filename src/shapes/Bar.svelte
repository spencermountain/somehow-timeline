<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import colors from '../_lib/colors.js'
  export let color = 'steelblue'
  export let width = '25px'
  export let height = '3px'
  export let opacity = '1'
  export let left = '0px'
  export let start = getContext('start')
  let ignore = false
  if (!spacetime(start).epoch) {
    start = null
    ignore = true
  }
  start = spacetime(start)
  color = colors[color] || color
  const scale = getContext('scale')
  start = start.epoch
  let top = scale(start)
</script>

{#if ignore === true}
  <div />
{:else}
  <div
    class="container"
    style="min-width:{width}; opacity:{opacity}; top:{top}px; height:{height}; left:{left}; background-color:{color};"
  />
{/if}

<style>
  .container {
    position: absolute;
    border-radius: 2px;
  }
</style>
