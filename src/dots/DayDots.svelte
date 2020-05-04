<script>
  import colors from '../_lib/colors'
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  const scale = getContext('scale')
  let start = getContext('start').minus(1, 'second')
  let end = getContext('end')
  export let data = []

  data = data.map(d => {
    d.value = spacetime(d.value).format('iso-short')
    return d
  })

  let days = start.every('day', end)
  days = days.map(d => {
    let iso = d.format('iso-short')
    let found = data.find(o => o.value === iso) || {}
    found.value = found.value || iso
    found.dots = found.dots || []
    return found
  })

  // todo: make sure every day appears
  // data = data.map(d => {
  //   d.value = spacetime(d.value).epoch
  //   d.value = scale(d.value)
  //   if (d.data && !d.dots) {
  //     d.dots = d.data
  //   }
  //   return d
  // })
</script>

<style>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-self: stretch;
  }
  .day {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0px;
    max-height: 15px;
  }
  .dot {
    border-radius: 50%;
    width: 5px;
    height: 5px;
    margin: 1px;
    background-color: steelblue;
  }
</style>

<div class="part container">
  {#each days as d, i}
    <div class="day" style="">
      {#each d.dots as dot}
        <div
          class="dot"
          title={dot.label + '  ' + d.label}
          style="background-color:{dot.color || 'steelblue'};" />
      {/each}
    </div>
  {/each}
</div>
