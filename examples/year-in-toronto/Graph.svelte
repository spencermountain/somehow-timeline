<script>
  import { Timeline, Ticks, Line, WideLabel, Now, Column, Label, Page } from '../../src'

  import Number from './Number.svelte'
  let title = 'Year in Toronto'
  let d = new Date()
  let year = d.getFullYear()
  let start = 'Jan 1 ' + year
  let end = 'Dec 31 ' + year
  let height = 900
  let pages = [null, 'sports', 'weather', 'more']
  let index = 1
</script>

<style>

</style>

<Number bind:number={index} min="1" max="4" hasSlider={false} />
<Timeline {start} {end} {height} {title}>
  <Column width="25px">
    <Ticks every="month" />
  </Column>
  <Column width="15px">
    <Line />
  </Column>
  <Column width="15px">
    <Now label="today" />
  </Column>
  <!-- sports -->
  <Page name="sports" page={pages[index]}>
    <!-- basketball -->
    <Column width="45px">
      <Line space="15px" end="April 10 {year}" color="red" label="Raptors" />
      <Line space="15px" start="October 16 {year}" end="Dec 31 {year}" color="red" label="" />
    </Column>
    <!-- hockey -->
    <Column width="45px">
      <Line space="15px" end="April 6 {year}" color="navy" label="Leafs" />
      <Line space="15px" start="October 3 {year}" end="Dec 31 {year}" color="navy" label="(Leafs)" />
    </Column>
    <!-- mls -->
    <Column width="20px">
      <Line space="15px" start="March 3 {year}" end="Dec 1 {year}" color="tulip" label="TFC" />
    </Column>
    <!-- baseball -->
    <Column width="80px">
      <Line space="15px" start="March 29 {year}" end="Oct 1 {year}" color="lightblue" label="Blue Jays" />
    </Column>
  </Page>

  <Page name="weather" page={pages[index]}>
    <Column width="10px">
      <Line space="15px" start="Jan 1 {year}" end="Feb 10 {year}" color="lighter" label="snow" />
      <Line space="15px" start="Dec 10 {year}" end="Dec 31 {year}" color="lighter" label="snow" />
      <Line space="15px" start="May 5 {year}" end="Oct 1 {year}" color="green" label="Leaves<br/> on trees" />
    </Column>
    <Column width="60px">
      <Line space="15px" start="May 24 {year}" end="Sept 1 {year}" color="purple" label="shorts" />
    </Column>
    <Column width="40px">
      <Label value="April 20 {year}" label="Patios" color="green" side="left" align="left" />
      <Label value="June 14 {year}" label="Pride" color="rose" side="left" align="left" />
      <Label value="July 14 {year}" label="Fringe" color="rose" side="left" align="left" />
      <Label value="August 20 {year}" label="CNE" color="rose" side="left" align="left" />
      <Label value="Sept 14 {year}" label="Tiff" color="rose" side="left" align="left" />
      <Label value="Oct 14 {year}" label="Nuit Blanche" color="orange" side="left" align="left" />
    </Column>
  </Page>

  <Page name="more" page={pages[index]}>
    <div>more</div>
  </Page>

</Timeline>
