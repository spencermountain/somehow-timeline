<script>
  export let number = 0
  export let min = 0
  export let max = 100
  const handle_pointerdown = e => {
    if (!e.isPrimary) return

    const start_x = e.clientX
    const start_value = Number(number)

    const handle_pointermove = e => {
      if (!e.isPrimary) return

      const d = e.clientX - start_x

      const step = Math.min(
        1,
        d > 0 ? (window.innerWidth - start_x) / (max - start_value) : start_x / (start_value - min)
      )

      const n = Math.round(d / step)
      number = Math.max(min, Math.min(max, start_value + Math.round(n * 0.1) * 1))
    }

    const handle_pointerup = e => {
      if (!e.isPrimary) return

      window.removeEventListener('pointermove', handle_pointermove)
      window.removeEventListener('pointerup', handle_pointerup)
    }

    window.addEventListener('pointermove', handle_pointermove)
    window.addEventListener('pointerup', handle_pointerup)
  }
  function add() {
    number = Number(number)
    number += 1
    return number
  }
  function minus() {
    number = Number(number)
    number -= 1
    return number
  }
</script>

<style>
  .slider-container {
    display: flex;
    position: relative;
    user-select: none;
    margin: 1rem;
    -moz-user-select: none;
    color: #333;
  }

  .slider-container span {
    display: block;
    font-size: 2em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white;
    cursor: ew-resize;
  }

  .slider-container button {
    background: none;
    border: none;
    font-size: 2em;
    margin: 0;
    padding: 0 0.2em;
    cursor: pointer;
  }
</style>

<div class="slider-container">

  <button disabled={number === min} on:click={minus}>&larr;</button>
  <span on:pointerdown={handle_pointerdown}>{number}</span>
  <button disabled={number === max} on:click={add}>&rarr;</button>
</div>
