<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  let start = getContext('start')
  let end = getContext('end')
  const scale = getContext('scale')
  start = start.minus(1, 'second')
  let arr = spacetime(start).every('months', end)
  let months = arr.map(s => {
    let y = scale(s.epoch)
    return {
      value: y,
      label: s.format('{month-short}'),
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
    white-space: nowrap;
    text-align: left;
    color: grey;
    font-size: 10px;
  }
</style>

<div class="part container">
  {#each months as month, i}
    <div class="label" style="top:{month.value}px;">{month.label} -</div>
  {/each}
</div>
