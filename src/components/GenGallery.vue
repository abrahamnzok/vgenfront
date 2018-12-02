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
    <button class="f6 link dim br3 ba ph3 pv2 mb2 dib black"
            v-show="true" @click="generateGif">Generate Gif</button>
    <button class="f6 link dim br3 ba ph3 pv2 mb2 dib black"
            v-show="true" @click="consoleData">Generate possible combination</button>
  </div>
</template>

<script>
import Vignette from './Vignette';
import { generateCompilation, fetchGif } from '../videogenapi';

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
    variants: [],
  }),
  created() {
    this.$store.dispatch('fetchData');
    this.$store.dispatch('fetchVariantData');
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
    async generateGif() {
      await fetchGif('idmgif');
    },
    consoleData() {
      this.variants = this.$store.state.variants;
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

<style >
</style>
