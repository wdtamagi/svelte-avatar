<script>
  import { Highlight } from 'svelte-highlight';
  import { javascript } from 'svelte-highlight/languages';

  import Avatar from '../../src/Avatar.svelte';

  $: code = `<Avatar name="John Walker" borderRadius="10px" />`;
</script>

<style>
  div {
    padding: 1rem 0;
  }
</style>

<div>
  <h2>Custom radius</h2>
  <Avatar name="John Walker" borderRadius="10px" />
  <Highlight language={javascript} {code} />
</div>
