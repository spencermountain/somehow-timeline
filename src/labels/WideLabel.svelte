<script>
  export let date = ''
  export let label = ''
  export let width = '90%'
  export let left = '10%'
  export let align = 'right'
  export let color = 'black'
  import { getContext } from 'svelte'
  import spacetime from 'spacetime'
  const scale = getContext('scale')
  let y = scale(spacetime(date).epoch)
  console.log(left)
</script>

<style>
  .wide {
    position: absolute;
    min-height: 3px;
    font-size: 0.8rem;
  }
</style>

<div
  class="wide"
  style="top:{y}px; width: {width}; left:{left}; text-align:{align}; color:{color}; border-bottom: 1px solid {color};">
  {label}
</div>
