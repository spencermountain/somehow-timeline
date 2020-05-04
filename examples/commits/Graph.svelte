<script>
  import spacetime from 'spacetime'
  import { Timeline, DayDots, Labels, Label, Line, Ticks } from '../../src'
  import { dotData } from './data'
  let year = 2019
  let start = spacetime()
    .year(year)
    .startOf('year')
  let end = start.endOf('year')
</script>

<style>

</style>

<Timeline {start} {end} height={2800} title="2019">
  <Ticks every="month" />
  <Labels>
    <Label label="portfolio" value="June 29 2019" color="green" />
    <Label label="v12 release" value="Nov 28 2019" color="tulip" />
  </Labels>
  <Line />
  <DayDots data={dotData} />
</Timeline>
