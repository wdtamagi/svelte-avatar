<script>
  import { Highlight } from 'svelte-highlight';
  import { javascript } from 'svelte-highlight/languages';

  import Avatar from '../../src/Avatar.svelte';

  $: code = `<Avatar initials="zZz" />`;
</script>

<style>
  div {
    padding: 1rem 0;
  }
</style>

<div>
  <h2>Custom initials</h2>
  <Avatar initials="zZz" />
  <Highlight language={javascript} {code} />
</div>
