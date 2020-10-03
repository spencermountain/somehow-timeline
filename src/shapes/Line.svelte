<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import Dots from './Dots.svelte'
  import c from 'spencer-color'

  let myScale = getContext('scale')
  export let color = 'steelblue'
  export let width = '100%'
  export let title = ''
  export let margin = 2
  export let opacity = '0.7'
  export let label = ''
  export let underline = 'none'
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
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    align-self: stretch;
  }
  .line {
    height: 100%;
    width: 100%;
    cursor: default;
    border-radius: 3px;
    z-index: 1;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
  }
  .line:hover {
    opacity: 1;
    box-shadow: 2px 2px 8px 0px steelblue;
  }
  .dots {
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
  .topLabel {
    width: 100%;
    position: relative;
    white-space: nowrap;
    z-index: 4;
    user-select: none;
    font-size: 11px;
  }
  .midLabel {
    position: absolute;
    z-index: 3;
    color: #fbfbfb;
  }
  .rotate {
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
  }
</style>

<div>{' -'}</div>

<div class="container" style="opacity:{opacity}; top:{top + margin}px; height:{height - margin * 2}px; " {title}>

  <!-- label -->
  {#if height > 20}
    <div class="midLabel" class:rotate>
      {@html label}
    </div>
  {:else}
    <div
      class="topLabel"
      style="color:{color}; text-decoration:{underline === true ? 'underline' : 'none'};"
      class:rotate>
      {@html label}
    </div>
  {/if}

  <!-- line -->
  <div class="line" style="width:{width}; background-color:{color};" />

  {#if dotted === true}
    <div class="dots" style="background-color: {'white'};">
      <Dots {color} />
    </div>
  {/if}

</div>
