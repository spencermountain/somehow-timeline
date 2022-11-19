<script>
  import { Timeline, Axis, Line, Column, Point, Era, Dash, Ticks, Label, Horizontal } from './src'
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
      <!-- <Timeline start="Jan 1 2020" end="Dec 30 2020" height="600" width="200">
        <Column width="100px">

          <Label start="January 1 2020" end="Feb 20 2020" color="pink" dotted={true} label="Typing" />
          <Label start="Feb 20 2020" end="November 11 2020" color="#6699cc" label="Refactoring" />
          <Label start="November 11 2020" end="December 20 2020" dotted={true} color="fire" label="Proof-reading" />
        </Column>
        <Column width="100px" />
      </Timeline> -->

      <Timeline start="1939" end="Dec 30 2022" height="700">
        <Column width="80px">
          <Label start="1945" end="1975" color="sky" label="1st career" width="8px" />
          <Label start="1970" end="2000" color="rose" label="2nd career" width="8px" dodge="15px" />
          <Label start="1995" end="2022" color="blue" label="3rd career" width="8px" />
        </Column>
        <Column width="10px">
          <Axis />
        </Column>
        <Column width="80px">
          <Horizontal date="1940" label="shannon" align="right" color="rose" width="50%" left="25%" />
          <Horizontal date="December 1968" label="engelbart" color="pink" align="right" width="40%" left="25%" />
          <Horizontal date="1994" label="netscape" color="olive" align="right" width="40%" left="25%" />
          <Horizontal date="2001" label="wikipedia" color="silver" align="right" width="40%" left="25%" />
          <Horizontal date="2007" label="iPhone" color="grey" align="right" width="40%" left="25%" />
        </Column>
        <Column width="140px">
          <Label start="February 7, 1958" end="1970" color="suede" label="DARPA" width="8px" size="11px" hide={false} />
          <Label start="April 4, 1975" end="today" width="8px" color="blue" topLabel="Microsoft" />
          <Label start="1977" end="today" color="silver" width="8px" dodge="20px" topLabel="Apple" />
          <Label start="September 4, 1998" end="today" width="8px" dodge="40px" color="orange" topLabel="Google" />
        </Column>
      </Timeline>
    </div>
  </div>
</div>

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
