<script>
  export let width = '30px'
</script>

<style>
  .column {
    position: relative;
  }
</style>

<div class="part column" style="width:{width};">
  <slot />
</div>
