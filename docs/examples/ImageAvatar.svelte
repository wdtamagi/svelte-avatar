<script>
  import Highlight from 'svelte-highlight';
  import javascript from 'svelte-highlight/src/languages/javascript';

  import Avatar from '../../src/Avatar.svelte';

  $: code = `<Avatar
  src="https://avatars0.githubusercontent.com/u/6810985?s=460&u=a2a24f33ad8d17377cef8163f596a7fbd1501cd4&v=4" />`;
</script>

<div>
  <h2>Image avatar</h2>
  <Avatar
    src="https://avatars0.githubusercontent.com/u/6810985?s=460&u=a2a24f33ad8d17377cef8163f596a7fbd1501cd4&v=4"
  />
  <Highlight language={javascript} {code} />
</div>

<style>
  div {
    padding: 1rem 0;
  }
</style>
