<script>
  import Highlight from 'svelte-highlight';
  import javascript from 'svelte-highlight/src/languages/javascript';

  import Avatar from '../../src/Avatar.svelte';

  $: code = `<Avatar
  name="John Walker"
  bgColor="aquamarine"
  textColor="rgba(22, 55, 33, 0.7)" />`;
</script>

<div>
  <h2>Custom color</h2>
  <Avatar
    name="John Walker"
    bgColor="aquamarine"
    textColor="rgba(22, 55, 33, 0.7)"
  />
  <Highlight language={javascript} {code} />
</div>

<style>
  div {
    padding: 1rem 0;
  }
</style>
