<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let color = 'light'
  export let width = '2px'
  export let label = ''
  export let now = spacetime.now().epoch
  color = c.colors[color] || color
  let start = getContext('start')
  let end = getContext('end')

  const scale = getContext('scale')
  $: y = scale(now)
  // $: y = 200
  // $: height = bottom - top
</script>

<style>
  .line {
    position: relative;
    margin: 0px;
  }

  .container {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>

<div class="container">
  <!-- <div class="wide label" style="top:{height}px;">{label}</div> -->
  <!-- <div class=""> -->
  <div class="line" style="border-bottom: {width} dashed {color}; top:{y}px;" />
  <!-- <div class="label" style="top:{height}px; color:lightgrey;">{label}</div> -->
  <!-- <div class="line future" style="border-left: {width} dashed {color}; height:100%;" /> -->
  <!-- </div> -->
</div>
