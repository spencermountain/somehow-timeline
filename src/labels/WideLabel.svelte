<script>
  export let date = ''
  export let label = ''
  export let align = 'right'
  export let color = 'black'
  import { getContext } from 'svelte'
  import spacetime from 'spacetime'
  const scale = getContext('scale')
  let y = scale(spacetime(date).epoch)
</script>

<style>
  .wide {
    position: absolute;
    width: 80%;
    left: 10%;
    min-height: 3px;
    border-bottom: 1px dotted grey;
    font-size: 0.8rem;
  }
</style>

<div class="wide" style="top:{y}px; text-align:{align}; color:{color};">
  {label}
</div>
