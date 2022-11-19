<script>
  import { getContext } from 'svelte'
  import colors from '../_lib/colors.js'
  import spacetime from 'spacetime'
  export let start = ''
  export let end = ''
  export let color = '#a99fb3'
  export let label = ''
  export let opacity = 1
  export let margin = 1
  color = colors[color] || color
  start = spacetime(start)
  end = spacetime(end)

  const scale = getContext('scale')
  let top = scale(start.epoch)
  let bottom = scale(end.epoch)
  let height = bottom - top
</script>

<div class="container" style=" opacity:{opacity}; top:{top + margin}px; height:{height - margin * 2}px; ">
  <div class="label" style="color:{color};">{label}</div>
  <div class="line" style="background-color:{color};" />
</div>

<style>
  .container {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  }
  .label {
    font-size: 16px;
    margin-right: 0.75rem;
    color: #606c74;
    /* border-bottom: 1px solid lightgrey; */
  }
  .line {
    height: 100%;
    width: 10px;
    border-radius: 3px;
  }
</style>
