<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let color = 'steelblue'
  export let width = '5px'
  export let title = ''
  export let space = '5px'
  export let margin = 0
  export let size = '14px'
  export let opacity = '1'
  export let label = ''
  export let dotted = false
  export let rotate = false
  export let duration = ''
  export let start = getContext('start')
  export let end = getContext('end')
  // console.log(start, end)
  start = spacetime(start)
  // console.log(spacetime.version)
  // console.log(
  //   spacetime('2012-01-01')
  //     // .add(7, 'years')
  //     .add(12 * 7, 'months')
  //     .format()
  // )
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
    // console.log(spacetime(start).format(), split, spacetime(end).format())
  }

  let top = scale(start)
  let bottom = scale(end)
  let height = bottom - top
  // setInterval(() => {
  //   console.log(m)
  // }, 1000)
  $: show_label = false
  $: tooltipY = 10
  let freeze_label = false
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
    /* visibility: visible; */
  }
  .container:hover .label {
    /* visibility: visible; */
  }
  .line {
    margin: 0px;
    height: 100%;
    cursor: pointer;
  }
  .label {
    position: absolute;
    /* visibility: hidden; */
    transform: translate(10px, -7px);
    white-space: nowrap;
    z-index: 4;
    padding: 5px;
    user-select: none;
  }
  .tooltip {
    /* visibility: hidden; */
    position: relative;
    background-color: #fbfbfb;
    padding: 10px;
    left: 15px;
    min-width: 80px;
    z-index: 4;
    position: absolute;
    /* border: 1px solid lightgrey; */
    border-radius: 5px;
  }
  .rotate {
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
  }
</style>

<div
  class="container"
  on:mouseenter={() => {
    setTimeout(function() {
      show_label = true
    }, 100)
  }}
  on:mouseleave={() => {
    setTimeout(function() {
      show_label = !freeze_label ? false : true
    }, 100)
  }}
  on:click={() => {
    if (!freeze_label) {
      show_label = true
      freeze_label = true
    } else {
      show_label = false
      freeze_label = false
    }
  }}
  style="min-width:{space}; opacity:{opacity}; top:{top + margin}px; height:{height - margin * 2}px; "
  {title}>
  <div class="line" style="border-left: {width} {dotted ? 'dotted' : 'solid'} {color};" />
  <div class="label" style="top:20%; color:{color}; font-size:{size};" class:rotate>
    {@html label}
  </div>
  <!-- {#if show_label}
    <div class="tooltip" style="top:20%; color:{color};">{label}</div>
  {/if} -->
</div>
