<script>
  import { Timeline, Ticks, Line, Column, Img, Label } from '../../src'
  let start = 'Jan 1 1870'
  let end = 'Dec 31 2020'
  let height = 2900
</script>

<style>

</style>

<Timeline {start} {end} {height}>
  <Column width="25px">
    <Ticks every="decade" />
  </Column>
  <Column width="25px">
    <Ticks every="year" size="8px" color="lightgrey" underline={false} />
  </Column>

  <!-- toronto -->
  <Column width="500px" title="toronto">
    <Img src="./img.jpg" date="1982" width="150px" caption="toronto" />
  </Column>

  <Column width="55px">
    <Label color="red" date="1890" label="hello" duration="1 year" align="right" />
  </Column>
  <Column width="3px">
    <Line />
  </Column>
  <Column width="55px">
    <Label color="red" date="1890" label="hello" duration="1 year" align="left" />
  </Column>

  <!-- montreal -->
  <Column width="500px" title="montreal" />

</Timeline>
