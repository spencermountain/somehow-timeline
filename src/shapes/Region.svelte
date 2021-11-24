<script>
  export let width = '90%'
  export let opacity = 0.3
  export let left = '10%'
  export let align = 'left'
  export let color = 'black'
  import { colors } from 'spencer-color'
  color = colors[color] || color
  import { getContext } from 'svelte'
  import spacetime from 'spacetime'
  const scale = getContext('scale')
  export let duration = ''
  export let start = getContext('start')
  export let date = ''
  start = date || start
  export let end = getContext('end')
  start = spacetime(start)
  if (!end && duration) {
    let words = duration.split(' ')
    end = start.add(words[0], words[1])
  }
  start = start.epoch
  end = spacetime(end).epoch

  if (duration) {
    let split = duration.split(' ')
    end = spacetime(start).add(Number(split[0]), split[1]).epoch
  }

  $: top = scale(start)
  $: bottom = scale(end)
  $: height = bottom - top
</script>

<div
  class="region"
  style="top:{top}px; width: {width}; opacity:{opacity}; height: {height}px; left:{left}; text-align:{align}; color:{color};
  background-color:{color};"
/>

<style>
  .region {
    height: 100%;
    height: 5px;
    cursor: default;
    border-radius: 3px;
    z-index: 1;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    min-height: 3px;
    font-size: 0.8rem;
  }
  .region:hover {
    opacity: 1;
    box-shadow: 2px 2px 8px 0px steelblue;
  }
</style>
