<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import { colors } from 'spencer-color'
  export let format = ''
  export let every = 'month'
  export let size = '12px'
  export let underline = false
  export let color = 'grey'
  export let opacity = '1'
  color = colors[color] || color

  const formats = {
    hour: '{hour}{ampm}',
    day: '{month-short} {date}',
    week: '{month-short} {date}',
    month: '{month-short}',
    year: 'year',
    quarter: '{quarter}',
    decade: 'year',
    century: 'year',
  }
  format = format || formats[every] || '{month-short} {date}'

  let start = getContext('start')
  const end = getContext('end')

  const scale = getContext('scale')

  const doUnderline = {
    hour: /12:00/,
    year: /00$/,
    decade: /00$/,
  }

  $start = $start.minus(1, 'second')
  let arr = $start.every(every, end)
  let ticks = arr.map((s) => {
    let y = scale(s.epoch)
    let label = s.format(format)
    return {
      value: y,
      underline: doUnderline[every] && doUnderline[every].test(label),
      label: label,
    }
  })
</script>

<div class="container" style="opacity:{opacity};">
  {#each ticks as tick}
    <div
      class="label"
      class:underline={underline || tick.underline}
      style="top:{tick.value}px; color:{color}; font-size:{size};"
    >
      {tick.label}
    </div>
  {/each}
</div>

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
    font-size: 1.1rem;
    height: 1.2rem;
    opacity: 0.6;
    transform: translate(0px, -8px);
  }
  .underline {
    opacity: 1;
    border-bottom: 1px solid grey;
  }
</style>
