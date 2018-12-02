<template>
  <div v-show="activate" class="gallery">
    <Vignette type="mandatories" :mediaType="mandatories"/>
    <Vignette type="optionals" :mediaType="optionals" inputType="checkbox"/>
    <Vignette type="alternatives" :mediaType="alternatives" inputType="radio"/>

  </div>
</template>

<script>
/* eslint-disable vue/no-side-effects-in-computed-properties,no-console,no-return-await */
import _ from 'lodash';
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
  asyncComputed: {
    mandatories: async () => _.filter(await fetchMedias(), data => data.mediatype === 'mandatory'),
    optionals: async () => _.filter(await fetchMedias(), data => data.mediatype === 'optional'),
    alternatives: async () => _.filter(await fetchMedias(), data => data.mediatype === 'alternative'),

  },
};
</script>

<style scoped>

</style>
