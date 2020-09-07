<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let start = ''
  export let end = ''
  export let text = ''
  export let subtitle = ''
  export let font = '1.2rem'
  export let size = '20'
  export let width = '100%'
  export let color = 'steelblue'
  export let label = text
  start = spacetime(start)
  end = spacetime(end)
  const scale = getContext('scale')
  let top = scale(start.epoch)
  let bottom = scale(end.epoch)
  let height = bottom - top
</script>

<style>
  .container {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    flex-wrap: nowrap;
    align-self: stretch;
  }
  .circle {
    border-radius: 50%;
  }
  .text {
    margin-left: 1rem;
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

<div class="container row nowrap" style="top:{top}px; width:{width};">
  <div class="circle" style="min-height:{size}px; min-width:{size}px; background-color:{color};" />
  <div class="text" style="font-size:{font};">
    {@html label}
  </div>
  <div class="subtitle">
    {@html subtitle}
  </div>
</div>
