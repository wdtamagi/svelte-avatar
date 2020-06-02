<script>
  import i from 'initials';

  export let style = '';
  export let name = 'Avatar';
  export let initials;
  export let src;
  export let bgColor = 'lightGray';
  export let textColor = 'white';
  export let size = '50px';
  export let borderRadius = '50%';

  const abbr = initials || i(name);
  const abbrLenght = abbr.length;
</script>

<style>
  .wrapper {
    width: var(--size);
    height: var(--size);
  }

  .innerImage,
  .innerInitials {
    width: 100%;
    height: 100%;
    border-radius: var(--borderRadius);
  }

  .innerInitials {
    line-height: var(--size);
    background-color: var(--bgColor);
    color: var(--textColor);
    text-align: center;
    font-size: calc(var(--size) / (var(--abbrLenght) + 0.5));
  }
</style>

<div
  aria-label={name}
  class="wrapper"
  style="{style}--borderRadius:{borderRadius}; --size:{size}; --bgColor:{bgColor};
  --src:{src}; --textColor:{textColor}; --abbrLenght:{abbrLenght}">
  {#if src}
    <img alt={name} class="innerImage" {src} />
  {:else}
    <div class="innerInitials">{abbr}</div>
  {/if}
</div>
