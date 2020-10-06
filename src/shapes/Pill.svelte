<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import Dots from './Dots.svelte'
  import c from 'spencer-color'
  let w = 100
  $: isTiny = w < 100
  let show = false

  let myScale = getContext('scale')
  export let color = 'steelblue'
  export let width = '100%'
  export let title = ''
  export let margin = 2
  export let opacity = '0.7'
  export let size = '1rem'
  export let label = ''
  export let sub = ''
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

  color = c.colors[color] || color
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
    position: absolute;
    width: 150px;
    left: 30px;
    min-height: 50px;
    flex: 1;
    z-index: 6;
    font-size: 1.6rem;
    /* background-color: #fbfbfb; */
    /* border-radius: 5px; */
    /* max-width:50%; */
  }
  .sub {
    color: grey;
    font-size: 1rem;
  }
</style>

<div class="container" style="opacity:{opacity}; top:{top + margin}px; height:{height - margin * 2}px; " {title}>

  <!-- line -->
  <div
    class="line"
    style="max-width:{width}; background-color:{color};"
    on:mouseover={() => (show = true)}
    on:mouseout={() => (show = false)} />
  {#if show}
    <div class="label" bind:clientWidth={w} style="color:{color}; font-size:{size};" on:click={onClick}>
      {label}
      <div class="sub">{sub}</div>
    </div>
  {/if}

  <!-- {#if dotted === true}
    <div class="dots" style="background-color: {'white'};">
      <Dots {color} />
    </div>
  {/if} -->

</div>
