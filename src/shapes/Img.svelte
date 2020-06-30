<script>
  import spacetime from 'spacetime'
  import { getContext } from 'svelte'
  import c from 'spencer-color'
  export let src = ''
  export let caption = ''
  export let align = 'center'
  export let link = ''
  export let width = '100%'
  export const opacity = '1'
  export let color = 'steelblue'
  color = c.colors[color] || color

  export let date = ''
  date = spacetime(date)

  const scale = getContext('scale')
  let top = scale(date.epoch)
</script>

<style>
  .container {
    position: absolute;
    width: 100%;
  }
  .caption {
    font-size: 0.9rem;
  }
  .link {
    text-decoration: none;
  }
  img {
    border-radius: 4px;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
  }
</style>

<div class="container" style="top:{top}px; text-align:{align};">
  {#if link}
    <a href={link} class="link" target="_blank">
      <img {src} alt={caption} style="width:{width}; margin-bottom:0px;" />
    </a>
  {:else}
    <img {src} alt={caption} style="width:{width}; margin-bottom:0px;" />
  {/if}
  {#if caption}
    <div class="caption">
      {@html caption}
    </div>
  {/if}
</div>
