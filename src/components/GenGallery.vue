<template>
  <div v-show="activate" class="gallery">
    <Vignette type="mandatories" :medias="medias"/>
  </div>
</template>

<script>
/* eslint-disable vue/no-side-effects-in-computed-properties,no-console,no-return-await */
import Vignette from './Vignette';
import { fetchMedias } from '../videogenapi';

export default {
  name: 'GenGallery',
  components: { Vignette },
  props: {
    activate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      medias: [],
    };
  },
  created() {
    const vm = this;
    fetchMedias().then((response) => {
      vm.medias = response;
    });
  },
};
</script>

<style scoped>

</style>
