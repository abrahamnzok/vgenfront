<template>
  <div class="vignette">
    <div class="cf pa2">
      <h2 class="system-sans-serif f4 fw4 mv ttc tracked gray">{{type}}</h2>
      <!-- Gallery Vignette -->
      <div v-for="(media, index) in medias" :key="index" class="fl w-50 w-25-m w-20-l pa2">
        <div class="db tc black-10">
          <img
            :src="media.src"
            class="w-100 db outline dim tc black-10"/>
          <dl class="mt2 f6 lh-copy">
            <dd class="ml0 black truncate w-100">{{media.medianame}}</dd>
          </dl>
        </div>
        <label :for="inputType"></label>
        <input :checked="type === 'mandatories'"
               :disabled="type === 'mandatories'"
               :value="media.mediasrc"
               :type="inputType"
               @change="handleUsersChoice($event)"
               :id="inputType">
      </div>
      <!-- Gallery Vignette -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Vignette',
  props: {
    type: {
      type: String,
    },
    medias: {
      type: Array,
    },
    inputType: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleUsersChoice(event) {
      this.$store.commit('handleUserChoice', event);
    },
  },
};
</script>

<style scoped>

</style>
