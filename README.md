<div align="center">
  <div><b>somehow-timeline</b></div>
  <div>— part of <a href="https://github.com/spencermountain/somehow">somehow</a> —</div>
  <img src="https://user-images.githubusercontent.com/399657/68222691-6597f180-ffb9-11e9-8a32-a7f38aa8bded.png"/>
  <div>WIP svelte time-based infographics</div>
  <div align="center">
    <sub>
      by
      <a href="https://spencermounta.in/">Spencer Kelly</a> 
    </sub>
  </div>
    <div align="center">
    <a href="https://npmjs.org/package/somehow-timeline">
      <img src="https://img.shields.io/npm/v/somehow-timeline.svg?style=flat-square" />
    </a>
  </div>
  <img height="25px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
</div>

lays-out visual elements using y-axis as time

uses [spacetime](http://spacetime.how) to parse and handle dates/times.

work-in-progress!

```html
<script>
  import { Timeline, Column, Line } from 'somehow-timeline'
</script>
<Timeline start="Jan 1 2020" end="Dec 30 2020" height="500">
  <Column width="75">
    <Line start="January 1 2020" end="Feb 20 2020" color="pink" width="15px" dotted="{true}" label="Before" />
    <Line start="Feb 20 2020" end="November 11 2020" width="15px" dotted="{true}" color="#6699cc" label="Middle" />
    <Line start="November 11 2020" end="December 20 2020" width="15px" color="fire" label="After" />
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

---

MIT
