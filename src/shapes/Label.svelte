<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'

  export let width = '5px'
  export let space = '5px'
  export let align = 'right'
  export let margin = 0
  export let size = '14px'
  export let opacity = '1'
  export let title = '' //hover text

  // text
  export let label = ''
  export let text = ''
  label = label || text

  // color
  export let color = 'steelblue'
  color = c.colors[color] || color

  // start date
  export let start = getContext('start')
  export let date = ''
  start = date || start
  start = spacetime(start)

  // end date
  export let end = getContext('end')
  export let duration = ''
  if (!end && duration) {
    let words = duration.split(' ')
    end = start.add(words[0], words[1])
  }

  const scale = getContext('scale')
  start = start.epoch
  end = spacetime(end).epoch

  if (duration) {
    let split = duration.split(' ')
    end = spacetime(start).add(Number(split[0]), split[1]).epoch
  }
  let top = scale(start)
  let bottom = scale(end)
  let height = bottom - top
</script>

<style>
  .container {
    display: block;
    position: absolute;
    border-radius: 5px;
  }
  .line {
    margin: 0px;
    height: 100%;
    cursor: pointer;
  }
  .label {
    position: absolute;
    transform: translate(10px, -7px);
    white-space: nowrap;
    z-index: 4;
    padding: 5px;
    user-select: none;
  }
</style>

<div
  class="container"
  style="width:100%; opacity:{opacity}; top:{top + margin}px; height:{height - margin * 2}px;"
  {title}>

  {#if align === 'left'}
    <div class="line" style="border-left: {width} solid {color};" />
    <div class="label" style="top:20%; color:{color}; font-size:{size};">
      {@html label}
    </div>
  {:else}
    <div class="label" style="top:20%; color:{color}; font-size:{size};">
      {@html label}
    </div>
    <div class="line" style="border-right: {width} solid {color};" />
  {/if}
</div>
