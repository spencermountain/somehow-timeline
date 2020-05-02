<script>
  import spacetime from 'spacetime'
  import makeScale from './makeScale'
  import * as d3Shape from 'd3-shape'
  import { getContext } from 'svelte'
  export let data = []
  export let width = 400
  const yScale = getContext('scale')
  const xScale = makeScale(data, width)

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
    vector-effect: non-scaling-stroke;
  }
</style>

<div class="part container" style="width:{width}px;">
  <svg preserveAspectRatio="none">
    <path
      d={path}
      fill="steelblue"
      stroke="steelblue"
      stroke-width="0"
      fill-opacity="0.5" />
    <path d={line} fill="none" stroke="steelblue" stroke-width="3px" />
  </svg>
</div>
