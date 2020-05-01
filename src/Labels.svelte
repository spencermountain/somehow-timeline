<script>
  export let data = []
  import colors from './_lib/colors'
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  const scale = getContext('scale')
  data = data.map(d => {
    d.value = spacetime(d.value).epoch
    d.value = scale(d.value)
    return d
  })
</script>

<style>
  .label {
    position: relative;
    margin: 25px !important;
    font-size: 18px;
    color: grey;
  }
</style>

<div class="part">
  {#each data as obj}
    <div class="label" style="top:{obj.value}px;">{obj.label}</div>
  {/each}
</div>
