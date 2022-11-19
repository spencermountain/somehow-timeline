<script>
  import colors from '../_lib/colors.js'
  export let label = ''
  export let width = ''
  export let color = 'steelblue'
  color = colors[color] || color
  export let title = ''
  export let margin = '20px'
  label = label || title
</script>

<div class="part column" style="margin:0px {margin} 0px {margin}; max-width:{width}; min-width:{width};">
  <div class="label" style="color:{color};">{label}</div>
  <slot />
</div>

<style>
  .column {
    flex: 1;
    position: relative;
  }
  .label {
    color: grey;
    font-size: 12px;
    background-color: #fbfbfb;
    display: block;
    z-index: 4;
    text-align: center;
  }
</style>
