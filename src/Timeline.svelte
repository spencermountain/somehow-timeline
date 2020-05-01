<script>
  let height = 800
</script>

<style>
  .container {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border: 1px solid red;
  }
</style>

<div>
  <div class="container" style="min-height:{height}px">
    <slot />
  </div>
</div>
