<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  let start = getContext('start')
  const end = getContext('end')
  const scale = getContext('scale')
  start = start.minus(1, 'second')
  let arr = spacetime(start).every('year', end)
  let years = arr.map(s => {
    let y = scale(s.epoch)
    return {
      value: y,
      label: s.format('year'),
    }
  })
</script>

<style>
  .container {
    position: relative;
    min-width: 40px;
  }
  .label {
    position: absolute;
    padding-left: 4px;
    padding-right: 4px;
    white-space: nowrap;
    text-align: left;
    color: grey;
    font-size: 10px;
    border-bottom: 1px solid grey;
  }
</style>

<div class="part container">
  {#each years as year}
    <div class="label" style="top:{year.value}px;">{year.label}</div>
  {/each}
</div>
