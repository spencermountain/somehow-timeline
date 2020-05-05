<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let color = 'steelblue'
  export let width = '5px'
  export let space = '5px'
  export let size = '14px'
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
    background-color: #fbfbfb;
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
  style="min-width:{space}; opacity:{opacity}; top:{top}px; height:{height}px;">
  <div class="line" style="border-left: {width} solid {color};" />
  <div class="label" style="top:20%; color:{color}; font-size:{size};">
    {@html label}
  </div>
  <!-- {#if show_label}
    <div class="tooltip" style="top:20%; color:{color};">{label}</div>
  {/if} -->
</div>
