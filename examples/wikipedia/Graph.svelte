<script>
  import { Timeline, YearTicks, Area } from '../../src'
  import { getContext } from 'svelte'
  import spacetime from 'spacetime'
  const height = getContext('height')
  import counts from './counts'
  let data = counts.map(a => {
    return {
      value: a[0],
      x: a[1],
    }
  })

  let start = '2001'
  let end = '2021'
  let title = '# Pages in Wikipedia'
</script>

<style>

</style>

<Timeline {start} {end} {height} {title}>
  <YearTicks />
  <Area {data} />
</Timeline>
