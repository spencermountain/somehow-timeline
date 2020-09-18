<script>
  import { Timeline, Axis, Line, Column, Point, Era } from './src'
</script>

<style>
  .container {
    /* border: 1px solid grey; */
    width: 500px;
    margin-bottom: 5rem;
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
    <span class="grey">- its a svelte component rendered using spacetime.</span>
  </div>
  <div class="container">
    <Timeline start="1660" height="900">
      <Column>
        <Era start="1700" end="1800" label="1700s" />
        <Era start="1800" end="1900" label="1800s" />
        <Era start="1900" label="1900s" />
      </Column>
      <Axis />
      <Column>
        <Line start="1740" end="1744" label="irish famine" color="red" />
        <Line start="1775" end="1783" label="U.S. independence" color="red" />
        <Line start="1804" end="1821" label="napoleon" color="red" />
        <Line start="1861" end="1865" label="maxwell's equations" color="red" />
        <Line start="1905" end="1909" label="e=mc²" color="red" />
        <Line start="1919" duration="4 years" label="ww1" color="red" />
        <Line start="1945" duration="4 years" label="ww2" color="red" />
      </Column>
      <Column>
        <Line start="1867" label="Canada" color="blue" />
      </Column>

    </Timeline>
  </div>
</div>
