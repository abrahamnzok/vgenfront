<template>
  <div v-show="activate" class="gallery">
    <Vignette inputType="checkbox"
              type="mandatories"
              :medias="mandatories"/>
    <Vignette inputType="checkbox" type="optionals" :medias="optionals"/>
    <Vignette inputType="checkbox" type="alternatives" :medias="alternatives"/>
    <button class="f6 link dim br3 ba ph3 pv2 mb2 dib black"
            @click="generateCompilation">Generate Compilation</button>
    <button class="f6 link dim br3 ba ph3 pv2 mb2 dib black"
            @click="autoGenerate">Autogenerate Compilation</button>
  </div>
</template>

<script>
import Vignette from './Vignette';
import { generateCompilation } from '../videogenapi';

export default {
  name: 'GenGallery',
  components: { Vignette },
  props: {
    activate: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    autogeneration: true,
  }),
  created() {
    this.$store.dispatch('fetchData');
  },
  methods: {
    async generateCompilation() {
      this.autogeneration = false;
      await generateCompilation(this.autogeneration, 'videogen', this.$store.state.userChoice);
    },
    async autoGenerate() {
      this.autogeneration = true;
      await generateCompilation(this.autogeneration);
    },
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
