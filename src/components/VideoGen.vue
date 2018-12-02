<template>
  <div class="vgenfront">
    <Header/>
    <GenGallery/>
  </div>
</template>

<script>
/* eslint-disable no-console,consistent-return */
import GenGallery from './GenGallery';
import Header from './Header';

export default {
  name: 'vgenfront',
  components: { Header, GenGallery },
  data: () => ({
    title: 'VideoGen Platform',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
