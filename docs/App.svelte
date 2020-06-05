<script>
  import { github } from 'svelte-highlight/styles';

  import NameAvatar from './examples/NameAvatar.svelte';
  import ImageAvatar from './examples/ImageAvatar.svelte';
  import CustomInitials from './examples/CustomInitials.svelte';
  import ImageFail from './examples/ImageFail.svelte';
  import CustomSize from './examples/CustomSize.svelte';
  import CustomColor from './examples/CustomColor.svelte';
  import CustomRadius from './examples/CustomRadius.svelte';
</script>

<style>
  main {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    flex-direction: column;
  }

  .exampleWrapper {
    padding: 2rem;
  }
</style>

<svelte:head>
  {@html github}
</svelte:head>

<main>
  <div class="exampleWrapper">
    <NameAvatar />
    <ImageAvatar />
    <CustomInitials />
    <ImageFail />
    <CustomSize />
    <CustomColor />
    <CustomRadius />
  </div>
</main>
