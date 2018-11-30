<template>
  <div class="vgenfront">
    <h1 class="f1 lh-title helvetica ">{{title}}</h1>
    <form class="">
    </form>
    <button @click=generateCompilation>Fetch Video</button>
    <button @click=fetchGif>Fetch Gif</button>
    <button @click=fetchVariantsData>Fetch Variants data</button>
    <button @click=fetchCompilationDuration>Fetch Duration</button>
    <button @click=fetchMedias>Fetch Medias</button>

  </div>
</template>

<script>
/* eslint-disable no-console,consistent-return */

import { server } from '../../axios.config';

export default {
  name: 'vgenfront',
  data: () => ({
    title: 'VideoGen Platform',
    data: [],
    duration: '',
  }),
  methods: {
    /**
     *
     * @returns {Promise<*>}
     */
    async generateCompilation() {
      try {
        const response = await server.get('compile/autogenerate/', {
          params: {
            autogen: true,
            filename: 'vue',
          },
          data: {},
          responseType: 'stream',
        });
        return response.data;
      } catch (e) {
        console.error(e);
      }
    },

    /**
     *
     * @returns {Promise<*>}
     */
    async fetchGif() {
      try {
        const response = await server.get('compile/gif/', {
          params: {
            gifname: 'vue',
          },
        });
        return response.data;
      } catch (e) {
        console.error(e);
      }
    },

    /**
     *
     * @returns {Promise<void>}
     */
    async fetchMedias() {
      try {
        const response = await server.get('allmedias/');
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    },

    /**
     *
     * @returns {Promise<void>}
     */
    async fetchVariantsData() {
      try {
        const response = await server.get('variant/possibilities/data/');
        this.data = response.data;
      } catch (e) {
        console.error(e);
      }
    },

    /**
     *
     * @returns {Promise<*>}
     */
    async fetchCompilationDuration() {
      try {
        const response = await server.get('variant/duration/');
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
