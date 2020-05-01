<script>
  import spacetime from 'spacetime'
  import { Timeline, DayDots, MonthTicks, Labels, Lines } from '../src'

  let year = 2012
  let start = spacetime()
    .year(year)
    .startOf('year')
  let end = start.endOf('year')

  let dotData = [
    { value: '2012-02-02', data: ['*****'] },
    { value: '2012-03-02', data: ['*********'] },
    { value: '2012-04-02', data: ['*****'] },
  ]
  let lineData = [{ start: start, end: end }]
</script>

<style>

</style>

<Timeline {start} {end} title="hi">
  <Labels data={[year]} />
  <MonthTicks />
  <Lines data={lineData} />
  <DayDots data={dotData} />
</Timeline>
