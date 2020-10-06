<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  let myScale = getContext('scale')
  import c from 'spencer-color'
  export let width = '25px'
  export let height = '3px'
  export let opacity = '1'
  export let start = null //getContext('start')
  export let date = start

  export let color = 'steelblue'
  color = c.colors[color] || color

  $: d = spacetime(date)
  $: top = myScale(d.epoch)
</script>

<style>
  .container {
    position: absolute;
    border-radius: 2px;
    width: 100%;
  }
</style>

<div
  class="container"
  style="min-width:{width}; opacity:{opacity}; top:{top}px; height:{height}; background-color:{color};" />
