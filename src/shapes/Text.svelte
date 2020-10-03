<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  let myScale = getContext('scale')
  export let width = '25px'
  export let opacity = '1'
  export let size = '1rem'
  export let start = null
  export let date = start
  export let label = ''

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

<div class="container" style="min-width:{width}; color:{color}; opacity:{opacity}; top:{top}px; font-size:{size};">
  {label}
</div>
