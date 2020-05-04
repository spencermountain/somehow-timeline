<script>
  import spacetime from 'spacetime'
  import { Timeline, DayDots, Column, Label, Line, Ticks } from '../../src'
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
  <Column width="90px">
    <Label
      label="(kingsville)"
      value="may 18 2019"
      color="lightgrey"
      opacity="0.5" />
    <Label
      label="(huron)"
      value="june 13 2019"
      color="lightgrey"
      opacity="0.5" />
    <Label
      label="(camping)"
      value="august 19 2019"
      color="lightgrey"
      opacity="0.5" />
    <Label
      label="(niagara)"
      value="march 28 2019"
      color="lightgrey"
      opacity="0.5" />
    <Label
      label="(montreal)"
      value="nov 8 2019"
      color="lightgrey"
      opacity="0.5" />
    <Label
      label="(florida)"
      value="dec 9 2019"
      color="lightgrey"
      opacity="0.5" />
    <Label label="spacetime v6" value="August 12, 2019" color="orange" />
    <Label label="portfolio" value="June 29 2019" color="green" />
    <Label label="v12 release" value="Nov 28 2019" color="tulip" />
  </Column>
  <Line />
  <DayDots data={dotData} />
</Timeline>
