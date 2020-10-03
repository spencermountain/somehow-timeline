<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let color = 'green'
  export let width = '3px'
  export let label = ''
  export let now = spacetime.now().epoch
  color = c.colors[color] || color
  let start = getContext('start')
  let end = getContext('end')

  const scale = getContext('scale')
  $: top = myScale(start)
  $: height = bottom - top
</script>

<style>
  .line {
    position: relative;
    margin: 0px;
  }
  .future {
    opacity: 0.3;
    position: absolute;
    top: 0px;
  }
  .label {
    font-size: 10px;
    transform: translate(7px, -10px);
  }
  .wide {
    position: absolute;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    min-height: 2px;
    font-size: 10px;
    color: lightgrey;
    text-align: right;
    transform: translate(0, -10px);
  }
  .container {
    /* width: 100%; */
    z-index: 5;
  }
</style>

<div class="container">
  <div class="wide label" style="top:{height}px;">{label}</div>
  <!-- <div class=""> -->
  <div class="line" style="border-left: {width} solid {color}; height:{height}px;" />
  <!-- <div class="label" style="top:{height}px; color:lightgrey;">{label}</div> -->
  <div class="line future" style="border-left: {width} dashed {color}; height:100%;" />
  <!-- </div> -->
</div>
