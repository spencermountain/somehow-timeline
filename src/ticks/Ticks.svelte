<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let format = ''
  export let every = 'month'
  export let size = '12px'
  export let underline = true
  export let color = 'grey'
  color = c.colors[color] || color

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
    font-size: 10px;
    transform: translate(0px, -8px);
  }
  .underline {
    border-bottom: 1px solid grey;
  }
</style>

<div class="container">
  {#each ticks as tick}
    <div class="label" class:underline style="top:{tick.value}px; color:{color}; font-size:{size};">{tick.label}</div>
  {/each}
</div>
