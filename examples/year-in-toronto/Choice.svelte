<script>
  export let hasSlider = false
  export let hasKeyboard = true

  export let choice = null
  export let choices = []
  let index = choices.findIndex(a => a === choice)
  if (index === -1) {
    index = 0
  }
  let max = choices.length - 1
  let min = 0

  const handle_pointerdown = e => {
    if (!e.isPrimary) {
      return
    }
    const start_x = e.clientX
    const start_value = index
    const handle_pointermove = e2 => {
      if (!e2.isPrimary) {
        return
      }
      const d = e2.clientX - start_x
      const step = 5
      const n = Math.round(d / step)
      index = Math.max(min, Math.min(max, start_value + Math.round(n * 0.1) * 1))
    }
    const handle_pointerup = e3 => {
      if (!e3.isPrimary) {
        return
      }
      window.removeEventListener('pointermove', handle_pointermove)
      window.removeEventListener('pointerup', handle_pointerup)
    }
    window.addEventListener('pointermove', handle_pointermove)
    window.addEventListener('pointerup', handle_pointerup)
  }

  function minus() {
    index -= 1
    if (index < 0) {
      index = 0
    }
  }
  function plus() {
    index += 1
    if (index > max) {
      index = max
    }
  }
  function handleKeydown(event) {
    if (hasKeyboard) {
      if (event.key === 'ArrowLeft') {
        minus()
      }
      if (event.key === 'ArrowRight') {
        plus()
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    /* max-width: 20rem; */
  }
  .slider {
    width: 80%;
    left: 10%;
  }
  .main-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
    position: relative;
    user-select: none;
    margin: 1rem;
    -moz-user-select: none;
    color: #50617a;
  }
  .main-row span {
    display: block;
    font-size: 1.3em;
    width: 10rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white;
    cursor: ew-resize;
  }
  .main-row button[disabled] {
    opacity: 0.2;
  }
  .main-row button {
    background: none;
    border: none;
    font-size: 1.2em;
    margin: 0;
    padding: 0 0.2em;
    cursor: pointer;
    color: #50617a;
  }
</style>

<svelte:window on:keydown={handleKeydown} />
<div class="container">
  <div class="main-row">
    <button disabled={index === 0} on:click={minus}>&larr;</button>
    <span on:pointerdown={handle_pointerdown}>{choices[index]}</span>
    <button disabled={index === choices.length - 1} on:click={plus}>&rarr;</button>
  </div>
  {#if hasSlider}
    <input class="slider" type="range" bind:value={index} min={0} {max} />
  {/if}
</div>
