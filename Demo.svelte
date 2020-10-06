<script>
  import { Timeline, Axis, Line, Column, Point, Era, Dash, Ticks, Label } from './src'
  let dashes = [1773, 1992, 1823, 1850]
  let height = 900
  let start = '1660'
  setTimeout(() => {
    dashes.push(1892)
    dashes.push(1792)
    dashes.push(1692)
    // dashes[0] += 140
    dashes = dashes
    // height = 300
    // start = 'jan 1 1560'
  }, 1200)
</script>

<style>
  .container {
    /* border: 1px solid grey; */
    flex: 1;
    height: 100%;
    height: 100%;
    width: 800px;
    margin-bottom: 5rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    align-self: stretch;
  }
  .text {
    color: #b8b9ba;
    font-size: 2rem;
    margin-right: 1.5rem;
    height: 100%;
    line-height: 3rem;
    width: 120px;
    text-align: center;
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
  .dash {
    border-left: 3px dashed #b8b9ba;
    min-width: 20px;
    min-height: 92%;
    align-self: stretch;
    margin-top: 4%;
    margin-bottom: 4%;
  }
</style>

<div class="col">
  <div class="m3 f1">
    <a class="f2" href="https://github.com/spencermountain/somehow-timeline">somehow-timeline</a>
    <span class="grey">- its a svelte component rendered using spacetime.</span>
  </div>
  <div class="container row">
    <!-- <div class="text">
      time
      <br />
      spent
      <br />
      writing
    </div>
    <div class="dash" /> -->
    <div style="height:100%; width:400px;">
      <Timeline start="Jan 1 2020" end="Dec 30 2020" height="600" width="200">
        <Column width="100px">

          <Label start="January 1 2020" end="Feb 20 2020" color="pink" dotted={true} label="Typing" />
          <Label start="Feb 20 2020" end="November 11 2020" color="#6699cc" label="Refactoring" />
          <Label start="November 11 2020" end="December 20 2020" dotted={true} color="fire" label="Proof-reading" />
        </Column>
        <Column width="100px" />
      </Timeline>
    </div>
  </div>
</div>
