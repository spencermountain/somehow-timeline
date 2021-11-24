<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import { colors } from 'spencer-color'
  let w = 100
  $: isTiny = w < 100

  let myScale = getContext('scale')
  export let topLabel = ''
  export let color = 'steelblue'
  export let width = '100%'
  export let title = ''
  export let hide = false
  export let dodge = '0px'
  export let margin = 2
  export let opacity = '0.7'
  export let size = '0.8rem'
  export let label = ''
  export let duration = ''
  export let onClick = () => {}
  export let start = getContext('start')
  export let date = ''
  start = date || start
  export let end = getContext('end')
  start = spacetime(start)
  if (!end && duration) {
    let words = duration.split(' ')
    end = start.add(words[0], words[1])
  }

  color = colors[color] || color
  start = start.epoch
  end = spacetime(end).epoch

  if (duration) {
    let split = duration.split(' ')
    end = spacetime(start).add(Number(split[0]), split[1]).epoch
  }

  const scale = getContext('scale')
  $: top = myScale(start)
  $: bottom = myScale(end)
  $: height = bottom - top
</script>

<div
  class="container"
  style="opacity:{opacity}; top:{top + margin}px; left:{dodge}; height:{height - margin * 2}px; "
  {title}
>
  {#if topLabel}
    <div class="top" class:hide style="color:{color}; color:{color}; font-size:{size};">{topLabel}</div>
  {/if}
  <!-- line -->
  <div class="line" style="max-width:{width}; background-color:{color};" />
  <div
    class="label"
    class:hide
    bind:clientWidth={w}
    style="color:{color}; font-size:{size};"
    class:isTiny
    on:click={onClick}
  >
    {label}
  </div>

  <!-- {#if dotted === true}
    <div class="dots" style="background-color: {'white'};">
      <Dots {color} />
    </div>
  {/if} -->
</div>

<style>
  .container {
    width: 100%;
    position: absolute;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    flex-wrap: nowrap;
    align-self: stretch;
  }
  .line {
    height: 100%;
    width: 25px;
    cursor: default;
    border-radius: 3px;
    z-index: 1;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
    /* flex: 1; */
  }
  .line:hover {
    opacity: 1;
    box-shadow: 2px 2px 8px 0px steelblue;
  }
  .label {
    flex: 1;
    margin-left: 0.8rem;
    /* max-width:50%; */
  }
  .isTiny {
    font-size: 0.7rem;
  }
  .top {
    position: absolute;
    top: -1.8rem;
    width: 100%;
  }
  .hide {
    display: none;
  }
</style>
