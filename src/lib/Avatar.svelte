<script>
  import { getRandomColor, getInitials } from './utils.js';

  let {
    style = '',
    name = 'Avatar',
    initials = undefined,
    src = undefined,
    bgColor = 'lightGrey',
    textColor = 'white',
    size = '50px',
    borderRadius = '50%',
    square = false,
    randomBgColor = false,
  } = $props();

  const randomColor = randomBgColor ? getRandomColor() : undefined;
  const background = $derived(randomColor ?? bgColor);

  const abbr = $derived(initials || getInitials(name));
  const abbrLength = $derived(abbr.length);

  let imageFail = $state(false);
  let imageLoading = $state(true);
</script>

<div
  aria-label={name}
  class="wrapper"
  style="{style}--borderRadius:{square
    ? 0
    : borderRadius}; --size:{size}; --bgColor:{background};
  --src:{src}; --textColor:{textColor}; --abbrLength:{abbrLength}"
>
  {#if src && !imageFail}
    <div class={imageLoading ? 'imageLoading' : ''}>
      <img
        alt=""
        class={`innerImage`}
        {src}
        onerror={() => (imageFail = true)}
        onload={() => (imageLoading = false)}
      />
    </div>
  {:else}
    <div class="innerInitials">{abbr}</div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative;
    width: var(--size);
    height: var(--size);
  }

  .innerImage,
  .innerInitials,
  .imageLoading {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: var(--borderRadius);
  }

  .innerInitials {
    line-height: var(--size);
    background-color: var(--bgColor);
    color: var(--textColor);
    text-align: center;
    font-size: calc(var(--size) / (var(--abbrLength) + 0.5));
  }

  .imageLoading {
    background-color: var(--bgColor);
  }
  .imageLoading::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, #ffffff38, transparent);
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton-animation 1.2s linear infinite;
  }

  @keyframes skeleton-animation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>
