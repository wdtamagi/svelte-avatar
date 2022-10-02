<script>
  import { getRandomColor, getInitials } from './utils.js';

  export let style = '';
  export let name = 'Avatar';
  export let initials;
  export let src;
  export let bgColor = 'lightGrey';
  export let textColor = 'white';
  export let size = '50px';
  export let borderRadius = '50%';
  export let square = false;
  export let randomBgColor = false;

  const background = randomBgColor ? getRandomColor() : bgColor;

  const abbr = initials || getInitials(name);
  const abbrLength = abbr.length;

  let imageFail = false;
  let imageLoading = true;
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
        on:error={() => (imageFail = true)}
        on:load={() => (imageLoading = false)}
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
