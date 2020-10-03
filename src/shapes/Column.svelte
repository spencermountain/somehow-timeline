<script>
  import c from 'spencer-color'
  export let label = ''
  export let color = 'steelblue'
  color = c.colors[color] || color
  export let title = ''
  export let margin = '20px'
  label = label || title
</script>

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

<div class="part column" style="margin:0px {margin} 0px {margin}; ">
  <div class="label" style="color:{color};">{label}</div>
  <slot />
</div>
