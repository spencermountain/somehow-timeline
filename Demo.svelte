<script>
  import { Timeline, Ticks, Line, Column, Img, Label, Duration, MainLine, Point } from './src'
</script>

<style>

</style>

<Timeline start="1660" end="today" height="900">
  <Column width="30px">
    <Ticks every="century" />
  </Column>
  <Column width="30px">
    <Ticks every="decade" underline={false} opacity="0.5" />
  </Column>
  <Column width="20px">
    <MainLine />
  </Column>
  <Column width="175px">
    <Line start="1740" end="1744" label="irish <br/>famine" opacity="0.5" color="red" align="left" size="14px" />
    <Line start="1775" end="1783" label="U.S. <br/>independence" opacity="0.5" color="red" align="left" size="14px" />
    <Line start="1804" end="1821" label="napoleon" opacity="0.5" color="red" align="left" size="14px" />
    <Line start="1861" end="1865" label="maxwell's</br> equations" opacity="0.5" color="red" align="left" size="14px" />
    <Line start="1905" end="1909" label="e=mc²" opacity="0.5" color="red" align="left" size="14px" />
    <Line start="1919" duration="4 years" label="ww1" opacity="0.5" color="red" align="left" size="14px" />
    <Line start="1945" duration="4 years" label="ww2" opacity="0.5" color="red" align="left" size="14px" />
  </Column>
  <Column width="125px">
    <Point start="1687" duration="2 years" text="Newton" subtitle="understands orbits" />
    <Duration start="1710" end="1976" label="280 years" color="" />
    <Point start="1976" duration="2 years" text="Sputnik" subtitle="(goes into orbit)" />
  </Column>

</Timeline>
