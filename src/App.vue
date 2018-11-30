<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vgenfront from './components/VideoGen';

export default {
  name: 'App',
  components: { Vgenfront },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
