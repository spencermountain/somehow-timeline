<script>
  import { Timeline, Ticks, Line, WideLabel, Now, Column, Label, Area } from '../../src'
  import mayors from './data'
  import years from './population'
  import spacetime from 'spacetime'
  import { colors } from '../../src'
  let title = 'History of Toronto'
  let d = new Date()
  let year = d.getFullYear()
  let start = 'Jan 1 1900'
  let end = 'Dec 31 2030'
  let height = 1800

  let population = years.map(a => {
    return {
      value: spacetime('jan 1 ' + a[0]).format('iso-short'),
      x: a[1],
    }
  })
</script>

<style>

</style>

<Timeline {start} {end} {height} {title}>
  <Ticks every="decade" />
  <Ticks every="year" size="8px" color="lightgrey" underline={false} />
  <Column width="2px">
    <Line width="3px" start="28 July 1914" end="11 November 1918" color="fire" label="" />
    <Line width="3px" start="1 September 1939" end="2 September 1945" color="fire" label="" />
  </Column>
  <Column width="35px">
    <Now color="blue" width="4px" label="now" />
  </Column>
  <Column width="5px" label="Subway">
    <Line space="15px" start="March 30 1954" color="yellow" label="Line 1" />
  </Column>
  <Column width="5px">
    <Line space="15px" start="May 10, 1968" color="green" label="Line 2" />
  </Column>
  <Column width="5px">

    <Line space="15px" start="March 22, 1985" color="sky" label="Line 3" />
  </Column>
  <Column width="40px">
    <Line space="15px" start="November 22, 2002" color="purple" label="Line 4" />
  </Column>
  <Column width="5px">
    <Line space="15px" start="November 22, 2022" color="pink" opacity="0.5" label="Crosstown" />
  </Column>
  <Column width="75px">
    <Label value="September 13 1965" label="City Hall" color="rose" side="left" align="left" />
    <Label value="August 20 1968" label="CN tower" color="rose" side="left" align="left" />
    <Label value="August 20 1989" label="Skydome" color="rose" side="left" align="left" />
    <Line space="15px" start="November 22, 2023" color="grey" opacity="0.5" label="Finch West" />
  </Column>

  <!-- mayors -->
  <!-- <Column width="125px">
    {#each mayors as mayor, i}
      <Line
        space="15px"
        width="3px"
        start={mayor[1]}
        size="8px"
        end={mayor[2]}
        color={colors.combos.dupont[i % 6]}
        opacity="0.4"
        label={mayor[0]} />
    {/each}
  </Column> -->
  <!-- population -->
  <!-- <Column width="200px">
    <Area data={population} width="120" color="slategrey" opacity="0.6" />
  </Column> -->
</Timeline>
