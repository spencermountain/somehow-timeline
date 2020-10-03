<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'

  export let start = ''
  export let date = start

  export let text = ''
  export let label = text
  export let subtitle = ''
  export let font = '1.2rem'
  export let size = '20'

  export let color = 'blue'
  color = c.colors[color] || color

  start = spacetime(date)
  const scale = getContext('scale')
  $: top = myScale(start.epoch)
</script>

<style>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
    transform: translate(0px, -12px);
  }
  .circle {
    border-radius: 50%;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
  }
  .circle:hover {
    box-shadow: 2px 2px 8px 0px steelblue;
  }
  .text {
    color: #8c8c8c;
  }
  .subtitle {
    margin-top: 3.5rem;
    font-size: 1rem;
    color: lightgrey;
    position: absolute;
    font-style: italic;
    min-width: 8rem;
    margin-left: 3rem;
  }
</style>

<div class="container row nowrap" style="top:{top}px; width:100%;">
  <div class="text" style="font-size:{font};">
    {@html label}
  </div>
  <div class="subtitle">
    {@html subtitle}
  </div>
  <div class="circle" style="min-height:{size}px; min-width:{size}px; background-color:{color};" />
</div>
