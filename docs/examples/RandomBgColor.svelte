<script>
  import Highlight from 'svelte-highlight';
  import javascript from 'svelte-highlight/src/languages/javascript';

  import Avatar from '../../src/Avatar.svelte';

  $: code = `<Avatar randomBgColor name="John Walker" />`;
</script>

<div>
  <h2>Random Background Color</h2>
  <Avatar randomBgColor name="John Walker" />
  <Highlight language={javascript} {code} />
</div>

<style>
  div {
    padding: 1rem 0;
  }
</style>
