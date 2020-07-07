<script>
  import { Timeline, Ticks, Line, Column, Img, Label } from './src'
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

</Timeline>
