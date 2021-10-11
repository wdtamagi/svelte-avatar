<script>
  import Highlight from 'svelte-highlight';
  import javascript from 'svelte-highlight/src/languages/javascript';

  import Avatar from '../../src/Avatar.svelte';

  $: code = `<Avatar name="John Walker" size="8rem" />`;
</script>

<div>
  <h2>Custom Size</h2>
  <Avatar name="John Walker" size="8rem" />
  <Highlight language={javascript} {code} />
</div>

<style>
  div {
    padding: 1rem 0;
  }
</style>
