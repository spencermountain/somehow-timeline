<script>
  import colors from '../_lib/colors'
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  const scale = getContext('scale')
  export let data = []
  data = data.map(d => {
    d.value = spacetime(d.value).epoch
    d.value = scale(d.value)
    if (d.data && !d.dots) {
      d.dots = d.data
    }
    d.dots = d.dots.map(dot => {
      dot.color = colors[dot.color] || dot.color
      return dot
    })
    return d
  })
</script>

<style>
  .container {
    position: relative;
  }
  .day {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0px;
    height: 15px;
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
  {#each data as d, i}
    <div class="day" style="top:{d.value}px;">
      {#each d.dots as dot}
        <div
          class="dot"
          title={dot.label}
          style="background-color:{dot.color || 'steelblue'};" />
      {/each}
    </div>
  {/each}
</div>
