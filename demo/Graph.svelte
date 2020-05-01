<script>
  import { Timeline, Days, Ticks } from '../src'
  let year = 2012

  let data = {
    '2012-02-02': '*****',
    '2012-03-02': '*********',
    '2012-04-02': '*****',
  }
  let days = []
  import spacetime from 'spacetime'
  let start = spacetime
    .now()
    .year(year)
    .startOf('year')
  while (start.year() <= year) {
    start = start.add(1, 'day')
    days.push(start.format('iso-short'))
  }
</script>

<style>
  .line {
    position: relative;
    border-left: 5px solid steelblue;
  }
  .label {
    margin-left: 25px !important;
    font-size: 20px;
  }
  .part {
    min-width: 2px;
    margin: 5px;
    min-height: 100%;
  }
</style>

<Timeline>
  <div class="part label" style="">{year}</div>
  <div class="part">
    <Ticks {days} />
  </div>
  <div class="part line" />
  <div class="part" style=" ">
    <Days {days} {data} />
  </div>
</Timeline>
