<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import { colors } from 'spencer-color'
  let myScale = getContext('scale')
  export let width = '25px'
  export let opacity = '1'
  export let size = '1rem'
  export let start = null
  export let underline = false
  export let date = start
  export let label = ''

  export let color = 'steelblue'
  color = colors[color] || color

  $: d = spacetime(date)
  $: top = myScale(d.epoch)
</script>

<div
  class="container"
  class:underline
  style="min-width:{width}; color:{color}; opacity:{opacity}; top:{top}px; font-size:{size};"
>
  {label}
</div>

<style>
  .container {
    position: absolute;
  }
  .underline {
    border-bottom: 1px solid steelblue;
    /* text-decoration:underline; */
  }
</style>
