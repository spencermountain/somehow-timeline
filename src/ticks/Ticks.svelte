<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  export let format = ''
  export let every = 'month'

  const formats = {
    month: '{month-short}',
    year: 'year',
    week: '{month-short} {date}',
    day: '{month-short} {date}',
    quarter: '{quarter}',
    decade: 'year',
  }
  format = format || formats[every] || '{month-short} {date}'
  let start = getContext('start')
  const end = getContext('end')
  const scale = getContext('scale')
  start = start.minus(1, 'second')
  let arr = spacetime(start).every(every, end)
  let ticks = arr.map(s => {
    let y = scale(s.epoch)
    return {
      value: y,
      label: s.format(format),
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
  {#each ticks as tick}
    <div class="label" style="top:{tick.value}px;">{tick.label}</div>
  {/each}
</div>
