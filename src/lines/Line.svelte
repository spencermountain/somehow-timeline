<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let color = 'steelblue'
  export let width = '5px'
  export let space = '5px'
  export let size = '9px'
  export let opacity = '1'
  export let label = ''
  export let start = getContext('start')
  export let end = getContext('end')

  color = c.colors[color] || color
  const scale = getContext('scale')
  start = spacetime(start).epoch
  end = spacetime(end).epoch
  let top = scale(start)
  let bottom = scale(end)
  let height = bottom - top
  // setInterval(() => {
  //   console.log(m)
  // }, 1000)
  $: tooltipY = 10
  function handleMousemove(e) {
    var rect = e.target.getBoundingClientRect()
    let y = e.clientY - rect.top
    if (y !== -1 && y !== 0) {
      tooltipY = y
    }
  }
</script>

<style>
  .container {
    display: block;
    margin: 10px;
    position: absolute;
    border-radius: 5px;
  }

  .container:hover .tooltip {
    /* Makes tooltip text visible when text is hovered on */
    visibility: visible;
  }
  .line {
    margin: 0px;
    height: 100%;
  }
  .label {
    position: absolute;
    transform: translate(10px, -7px);
    white-space: nowrap;
  }
  .tooltip {
    visibility: hidden;
    position: relative;
    background-color: #fbfbfb;
    padding: 10px;
    left: 15px;
    min-width: 80px;
    z-index: 4;
    position: absolute;
    border: 1px solid lightgrey;
    border-radius: 5px;
  }
</style>

<div
  class="container"
  on:mousemove={handleMousemove}
  style="min-width:{space}; opacity:{opacity}; top:{top}px; height:{height}px;">
  <div class="line" style="border-left: {width} solid {color};" />
  <div class="label" style="top:{bottom}px; color:{color}; font-size:{size};">
    {@html label}
  </div>
  <div class="tooltip" style="top:{tooltipY - 25}px; color:{color};">{label}</div>
</div>
