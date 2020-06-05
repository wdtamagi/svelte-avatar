<script>
  import { Highlight } from 'svelte-highlight';
  import { javascript } from 'svelte-highlight/languages';

  import Avatar from '../../src/Avatar.svelte';

  $: code = `<Avatar name="John Walker" size="8rem" />`;
</script>

<style>
  div {
    padding: 1rem 0;
  }
</style>

<div>
  <h2>Custom Size</h2>
  <Avatar name="John Walker" size="8rem" />
  <Highlight language={javascript} {code} />
</div>
