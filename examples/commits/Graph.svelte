<script>
  import spacetime from 'spacetime'
  import { Timeline, DayDots, Column, Label, Line, Ticks } from '../../src'
  import { dotData } from './data'
  let year = 2019
  let start = spacetime().year(year).startOf('year')
  let end = start.endOf('year')
</script>

<Timeline {start} {end} height={2800} title="2019">
  <Ticks every="month" />
  <Column width="90px">
    <Label label="spacetime v6" value="August 12, 2019" color="orange" />
    <Label label="portfolio" value="June 29 2019" color="green" />
    <Label label="v12 release" value="Nov 28 2019" color="tulip" />
  </Column>
  <Line />
  <DayDots data={dotData} />
</Timeline>

<style>
</style>
