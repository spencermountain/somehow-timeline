<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  export let start = ''
  export let end = ''
  export let text = ''
  export let color = 'black'
  // export let subtitle = ''
  export let label = text
  start = spacetime(start)
  end = spacetime(end)
  const scale = getContext('scale')
  $: top = myScale(start)
  $: bottom = myScale(end)
  $: height = bottom - top
</script>

<div class="row container" style="top:{top}px; height:{height}px;">
  <div class="side" />
  <div class="line" />
  <div class="side label" style="color:{color};">{label}</div>
</div>

<style>
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  }
  .line {
    height: 100%;
    width: 12px;
    border-left: 2px dotted lightgrey;
  }
  .side {
    width: 40%;
  }
  .label {
    font-size: 1.4rem;
  }
</style>
