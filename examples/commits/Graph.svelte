<script>
  import spacetime from 'spacetime'
  import { Timeline, DayDots, Label, Lines, Ticks } from '../../src'
  import { dotData } from './data'
  let year = 2019
  let start = spacetime()
    .year(year)
    .startOf('year')
  let end = start.endOf('year')

  let lineData = [{ start: start, end: end }]
</script>

<style>

</style>

<Timeline {start} {end} height={2800} title="2019">
  <Ticks every="month" />
  <Label label="v12 release" value="Nov 28 2019" color="tulip" />
  <Lines data={lineData} />
  <DayDots data={dotData} />
</Timeline>
