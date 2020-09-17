<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let format = ''
  export let every = 'month'
  export let size = '12px'
  export let color = '#949a9e'
  color = c.colors[color] || color

  let start = getContext('start')
  const end = getContext('end')
  const scale = getContext('scale')

  let diff = start.diff(end)
  // choose the scale automatically
  if (diff.years > 400) {
    every = 'century'
  } else if (diff.years > 40) {
    every = 'decade'
  } else if (diff.years > 4) {
    every = 'year'
  } else if (diff.months > 4) {
    every = 'month'
  } else if (diff.week > 4) {
    every = 'week'
  } else if (diff.day > 4) {
    every = 'day'
  } else if (diff.hour > 4) {
    every = 'hour'
  }

  const formats = {
    hour: '{hour}{ampm}',
    day: '{month-short} {date}',
    week: '{month-short} {date}',
    month: '{month-short}',
    quarter: '{quarter}',
    year: 'year',
    decade: 'year',
    century: 'year',
  }
  format = format || formats[every] || '{month-short} {date}'

  const underline = {
    hour: /12:00/,
    // day://,
    // week://,
    // month://,
    // quarter://,
    year: /00$/,
    decade: /00$/,
    // century://,
  }

  start = start.minus(1, 'second')
  let arr = spacetime(start).every(every, end)
  let ticks = arr.map(s => {
    let y = scale(s.epoch)
    let label = s.format(format)
    return {
      value: y,
      underline: underline[every] && underline[every].test(label),
      label: label,
    }
  })
</script>

<style>
  .container {
    position: relative;
    min-width: 50px;
  }
  .label {
    position: absolute;
    white-space: nowrap;
    left: 6px;
    text-align: left;
    font-size: 10px;
    transform: translate(0px, -8px);
    opacity: 0.5;
  }
  .underline {
    border-bottom: 1px solid grey;
    opacity: 1;
  }
</style>

<div class="container">
  {#each ticks as tick}
    <div class="label" class:underline={tick.underline} style="top:{tick.value}px; color:{color}; font-size:{size};">
      {tick.label}
    </div>
  {/each}
</div>
