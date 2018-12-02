/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { fetchMedias } from '../videogenapi';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    medias: [],
    userChoice: [],
  },
  getters: {
    mandatory(state) {
      return _.filter(state.medias, media => media.mediatype === 'mandatory');
    },
    optionals(state) {
      return _.filter(state.medias, media => media.mediatype === 'optional');
    },
    alternatives(state) {
      return _.filter(state.medias, media => media.mediatype === 'alternative');
    },
  },
  mutations: {
    setData(state, data) {
      state.medias = data;
    },
  },
  actions: {
    fetchData(context) {
      fetchMedias().then((data) => {
        context.commit('setData', data);
      });
    },
  },
});
