<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  let myScale = getContext('myScale')
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
  }
</style>

${top}
<div
  class="container"
  style="min-width:{width}; opacity:{opacity}; top:{top}px; height:{height}; background-color:{color};" />
