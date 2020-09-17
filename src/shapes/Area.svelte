<script>
  import spacetime from 'spacetime'
  import makeTicks from 'somehow-ticks'
  import scale from '../_lib/scale'
  import * as d3Shape from 'd3-shape'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  let start = getContext('start')
  let end = getContext('end')
  export let data = []
  export let width = 400
  export let opacity = '1'
  export let showTicks = true
  export let color = 'blue'
  color = c.colors[color] || color
  const yScale = getContext('scale')

  // find max x
  let max = 0
  data.forEach(o => {
    if (o.x > max) {
      max = o.x
    }
  })

  let xScale = val => {
    return scale(
      {
        world: [0, width],
        minmax: [0, max],
      },
      val
    )
  }

  let points = data.map(obj => {
    let d = spacetime(obj.value)
    return {
      x: xScale(obj.x),
      y: yScale(d.epoch),
    }
  })

  let path = d3Shape
    .area()
    .x0(d => d.x)
    .y0(d => d.y)
    .y1(6070129)
    .curve(d3Shape.curveMonotoneX)(points)

  let line = d3Shape
    .line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(d3Shape.curveMonotoneX)(points)

  let ticks = makeTicks(0, max, 4)
  if (!showTicks) {
    ticks = []
  }
</script>

<style>
  .container {
    position: relative;
    min-width: 40px;
  }
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* vector-effect: non-scaling-stroke; */
  }
  .ticks {
    position: absolute;
    width: 100%;
    bottom: 0px;
  }
  .tick {
    position: absolute;
    color: grey;
    font-size: 12px;
  }
</style>

<div class="container" style="width:{width}px; opacity:{opacity};">
  <svg preserveAspectRatio="none">
    <path d={path} fill={color} stroke={color} stroke-width="0" fill-opacity="0.5" />
    <path d={line} fill="none" stroke={color} stroke-width="3px" />
  </svg>
  <div class="ticks">
    {#each ticks as tick}
      <div class="tick" style="left:{tick.value * 100}%; transform:translate(5px)">∣</div>
      <div class="tick" style="top:12px; left:{tick.value * 100}%;">{tick.label}</div>
    {/each}
  </div>
</div>
