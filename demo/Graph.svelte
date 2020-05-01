<script>
  import spacetime from 'spacetime'
  import { Timeline, DayDots, MonthTicks, Labels, Lines } from '../src'
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
  <!-- <Labels data={[{ label: 'hi', value: 'May 1 2019' }]} /> -->
  <MonthTicks />
  <Lines data={lineData} />
  <DayDots data={dotData} />
</Timeline>
