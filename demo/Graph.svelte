<script>
  import spacetime from 'spacetime'
  import { Timeline, DayDots, MonthTicks, Labels, Lines } from '../src'

  let year = 2019
  let start = spacetime()
    .year(year)
    .startOf('year')
  let end = start.endOf('year')

  let dotData = [
    {
      value: '2019-02-02',
      data: [{ color: 'blue', label: 'cool' }, { color: 'red' }],
    },
    {
      value: '2019-03-02',
      data: [
        { color: 'blue' },
        { color: 'blue' },
        { color: 'blue' },
        { color: 'blue' },
        { color: 'blue' },
      ],
    },
    { value: '2019-04-02', data: [{ color: 'orange' }] },
  ]
  let lineData = [{ start: start, end: end }]
</script>

<style>

</style>

<Timeline {start} {end} title="2019">
  <!-- <Labels data={[{ label: 'hi', value: 'May 1 2019' }]} /> -->
  <MonthTicks />
  <Lines data={lineData} />
  <DayDots data={dotData} />
</Timeline>
