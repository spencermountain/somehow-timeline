<script>
  import { getContext } from 'svelte'
  import spacetime from 'spacetime'
  import c from 'spencer-color'
  export let opacity = '1.0'

  export let width = '30px'
  export let color = 'grey'
  export let date = ''
  export let size = '12px'
  color = c.colors[color] || color
  const scale = getContext('scale')
  let top = scale(spacetime(date).epoch)
</script>

<style>
  .column {
    position: absolute;
  }
</style>

<div class="column" style="top:{top}px; width:{width}; opacity:{opacity}; color:{color}; font-size:{size};">
  <slot />
</div>
