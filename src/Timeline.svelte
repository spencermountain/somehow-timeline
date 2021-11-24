<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  import { afterUpdate } from 'svelte'
  import spacetime from 'spacetime'
  import colors from './_lib/colors'
  import linear from './_lib/scale'
  export let start = null
  export let end = null
  export let height = 800
  start = spacetime(start)
  end = spacetime(end)

  let h = writable(height)
  let s = writable(start)
  let e = writable(end)
  setContext('height', h)
  setContext('start', s)
  setContext('end', e)
  setContext('colors', colors)

  let myScale = (epoch) => {
    return linear(
      {
        world: [0, $h],
        minmax: [$s.epoch, $e.epoch],
      },
      epoch
    )
  }
  setContext('scale', myScale)

  afterUpdate(() => {
    $h = height
    $s = spacetime(start)
    $e = spacetime(end)
    setContext('height', height)
    setContext('start', spacetime(start))
    setContext('end', spacetime(end))
  })
</script>

<div class="timeline" style="height:{$h}px">
  <slot />
</div>

<style>
  :global(.part) {
    min-height: 100%;
  }

  .timeline {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
    /* border: 1px solid grey; */
  }
</style>
