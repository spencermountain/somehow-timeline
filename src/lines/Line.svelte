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
</script>

<style>
  .line {
    position: absolute;
    margin: 0px;
    height: 100%;
  }
  .label {
    position: absolute;
    transform: translate(10px, -7px);
    white-space: nowrap;
  }
</style>

<div style="min-width:{space}; opacity:{opacity};">
  <div
    class="line"
    style="border-left: {width} solid {color}; top:{top}px; height:{height}px;" />
  <div class="label" style="top:{bottom}px; color:{color}; font-size:{size};">
    {@html label}
  </div>
</div>
