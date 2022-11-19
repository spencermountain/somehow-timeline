<script>
  export let date = ''
  export let label = ''
  export let hide = false
  export let width = '90%'
  export let left = '10%'
  export let align = 'left'
  export let color = 'black'
  import colors from '../_lib/colors.js'
  color = colors[color] || color
  import { getContext } from 'svelte'
  import spacetime from 'spacetime'
  const scale = getContext('scale')
  let y = scale(spacetime(date).epoch)
</script>

<div
  class="wide line"
  style="top:{y}px; width: {width}; left:{left}; text-align:{align}; color:{color}; background-color:{color};"
>
  <div class="label" class:hide>{label}</div>
</div>

<style>
  .line {
    height: 100%;
    height: 5px;
    cursor: default;
    border-radius: 3px;
    z-index: 1;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
    /* flex: 1; */
  }
  .line:hover {
    opacity: 1;
    box-shadow: 2px 2px 8px 0px steelblue;
  }
  .wide {
    position: absolute;
    min-height: 3px;
    font-size: 0.8rem;
  }
  .label {
    margin: 10px;
  }
  .hide {
    display: none;
  }
</style>
