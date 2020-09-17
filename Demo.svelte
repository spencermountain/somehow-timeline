<script>
  import { Timeline, Axis, Ticks, Line, Column, Img, Label, Duration, MainLine, Point } from './src'
</script>

<style>
  .container {
    border: 1px solid grey;
    width: 500px;
  }
  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    align-self: stretch;
  }
  a {
    color: steelblue;
    text-decoration: none;
  }
  .f2 {
    font-size: 2rem;
  }
  .f1 {
    font-size: 1.2rem;
    margin: 3rem;
  }
</style>

<div class="col">
  <div class="m3 f1">
    <a class="f2" href="https://github.com/spencermountain/somehow-timeline">somehow-timeline</a>
    <span class="f08 grey">- its a svelte component rendered using spacetime.</span>
  </div>
  <div class="container">
    <Timeline start="1660" height="900">
      <Axis />
      <Column>
        <Line start="1740" end="1744" label="irish famine" opacity="0.5" color="red" align="left" size="14px" />
        <Line start="1775" end="1783" label="U.S. independence" opacity="0.5" color="red" align="left" size="14px" />
        <Line start="1804" end="1821" label="napoleon" opacity="0.5" color="red" align="left" size="14px" />
        <Line start="1861" end="1865" label="maxwell's equations" opacity="0.5" color="red" align="left" size="14px" />
        <Line start="1905" end="1909" label="e=mc²" opacity="0.5" color="red" align="left" size="14px" />
        <Line start="1919" duration="4 years" label="ww1" opacity="0.5" color="red" align="left" size="14px" />
        <Line start="1945" duration="4 years" label="ww2" opacity="0.5" color="red" align="left" size="14px" />
      </Column>
      <Column>
        <Line start="1845" duration="4 years" label="ww2" opacity="0.5" color="blue" align="left" size="14px" />
      </Column>

    </Timeline>
  </div>
</div>
