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
  .line {
    position: relative;
    min-width: 30px;
    height: 100%;
    border-left: 5px solid steelblue;
  }
  .side {
    min-width: 20px;
    margin: 10px;
    height: 100%;
  }
</style>

<div>
  <div class="container" style="height:{height}px">
    <div class="side" style="">1997</div>
    <div class="line" />
    <div class="side" style=" " />
  </div>
</div>
