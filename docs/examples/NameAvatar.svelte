<script>
  import { Highlight } from 'svelte-highlight';
  import { javascript } from 'svelte-highlight/languages';

  import Avatar from '../../src/Avatar.svelte';

  $: code = `<Avatar name="John Walker" />`;
</script>

<style>
  div {
    padding: 1rem 0;
  }
</style>

<div>

  <h2>Initials avatar</h2>
  <Avatar name="John Walker" />
  <Highlight language={javascript} {code} />
</div>
