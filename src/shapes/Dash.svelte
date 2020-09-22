<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let color = 'steelblue'
  export let width = '25px'
  export let height = '3px'
  export let opacity = '1'
  export let start = getContext('start')
  export let date = start
  let ignore = false
  if (!spacetime(date).epoch) {
    date = null
    ignore = true
  }
  date = spacetime(date)
  color = c.colors[color] || color
  const scale = getContext('scale')
  date = date.epoch
  let top = scale(date)
</script>

<style>
  .container {
    position: absolute;
    border-radius: 2px;
  }
</style>

{#if ignore === true}
  <div />
{:else}
  <div
    class="container"
    style="min-width:{width}; opacity:{opacity}; top:{top}px; height:{height}; background-color:{color};" />
{/if}
