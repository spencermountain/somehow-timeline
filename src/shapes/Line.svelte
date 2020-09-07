<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let color = 'steelblue'
  export let width = '50px'
  export let title = ''
  export let space = '5px'
  export let margin = 0
  export let size = '18px'
  export let opacity = '1'
  export let label = ''
  export let dotted = false
  export let rotate = false
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

  color = c.colors[color] || color
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
    margin: 10px;
    position: absolute;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    align-self: stretch;
  }
  .line {
    height: 100%;
    cursor: pointer;
    border-radius: 3px;
  }
  .label {
    position: absolute;
    transform: translate(14px, -7px);
    white-space: nowrap;
    z-index: 4;
    padding: 5px;
    user-select: none;
  }
  .rotate {
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
  }
</style>

<div
  class="container"
  style="min-width:{space}; opacity:{opacity}; top:{top + margin}px; height:{height - margin * 2}px; "
  {title}>
  <div class="line" style="width:{width}; background-color:{color};" />
  <div class="label" style="top:20%; left:{width}; color:{color}; font-size:{size};" class:rotate>
    {@html label}
  </div>
</div>
