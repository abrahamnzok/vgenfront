<template>
  <div v-show="activate" class="gallery">
    <Vignette inputType="checkbox"
              type="mandatories"
              :medias="mandatories"/>
    <Vignette inputType="checkbox"
              type="optionals"
              :medias="optionals"/>
    <Vignette inputType="checkbox" type="alternatives" :medias="alternatives"/>
  </div>
</template>

<script>
import Vignette from './Vignette';

export default {
  name: 'GenGallery',
  components: { Vignette },
  props: {
    activate: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    this.$store.dispatch('fetchData');
  },
  computed: {
    mandatories() {
      return this.$store.getters.mandatory;
    },
    optionals() {
      return this.$store.getters.optionals;
    },
    alternatives() {
      return this.$store.getters.alternatives;
    },
  },
};
</script>

<style scoped>

</style>
