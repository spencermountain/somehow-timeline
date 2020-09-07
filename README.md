<div align="center">
  <div><b>somehow-timeline</b></div>
  <img src="https://user-images.githubusercontent.com/399657/68222691-6597f180-ffb9-11e9-8a32-a7f38aa8bded.png"/>
  <div>WIP svelte time-series infographics</div>
  <div align="center">
    <sub>
      by
      <a href="https://spencermounta.in/">Spencer Kelly</a> 
    </sub>
  </div>
  <img height="25px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
</div>

lays-out visual elements using y-axis as time

uses [spacetime](http://spacetime.how) to parse and handle dates/times.

work-in-progress!

```html
<script>
  import { Timeline, Column, Line, Label } from 'somehow-timeline'
</script>
<Timeline start="Jan 1 2020" end="Dec 30 2020" height="500">
  <Column width="15px">
    <Line start="January 1 2020" width="20px" end="Feb 20 2020" color="pink" />
    <Line start="Feb 20 2020" width="20px" end="November 11 2020" color="#6699cc" />
    <Line start="November 11 2020" width="20px" end="December 20 2020" color="fire" />
  </Column>
  <Column width="75">
    <Line start="January 1 2020" end="Feb 20 2020" color="pink" width="15px" dotted="{true}" label="Typing" />
    <Line start="Feb 20 2020" end="November 11 2020" width="15px" dotted="{true}" color="#6699cc" label="Refactoring" />
    <Line
      start="November 11 2020"
      end="December 20 2020"
      width="15px"
      dotted="{true}"
      color="fire"
      label="Proof-reading"
    />
  </Column>
</Timeline>
```

![image](https://user-images.githubusercontent.com/399657/92404871-70a03e80-f102-11ea-829b-ba27fc8cff58.png)

### API

- Timeline
- Ticks
- Line
- Column
- Img
- Label
- Duration
- MainLine
- Point

MIT
