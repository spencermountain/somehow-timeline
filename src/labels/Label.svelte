<script>
  import { getContext } from 'svelte'
  import spacetime from 'spacetime'
  import c from 'spencer-color'
  export let label = ''
  export let align = 'right'
  export let value = null
  export let color = '#AB5850'
  color = c.colors[color] || color
  const scale = getContext('scale')

  let obj = {
    label: label,
    value: scale(spacetime(value).epoch),
  }
</script>

<style>
  .label {
    position: relative;
    padding: 15px 5px 15px 15px;
    font-size: 12px;
    color: grey;
  }
</style>

<div class="part">
  <div
    class="label"
    style="top:{obj.value}px; border-right: 4px solid {color}; color:{color};
    text-align: {align};">
    {@html obj.label}
  </div>
</div>
