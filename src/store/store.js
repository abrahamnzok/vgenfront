/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { fetchMedias, fetchVariantsData } from '../videogenapi';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    medias: [],
    mandatory: [],
    mandatoriesSrc: [],
    userChoice: [],
    outputLocation: '',
    variants: [],
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
    mediavariants(state) {
      return state.variants;
    },
  },
  mutations: {
    setData(state, data) {
      state.medias = data;
      state.mandatory = _.filter(state.medias, media => media.mediatype === 'mandatory');
      state.mandatory.forEach((media) => {
        state.mandatoriesSrc.push(media.mediasrc);
      });
      state.userChoice = state.mandatoriesSrc;
    },
    handleUserChoice(state, event) {
      if (event.target.checked) {
        state.userChoice.push(event.target.value);
      } else {
        _.remove(state.userChoice, media => media === event.target.value);
      }
    },
    setVariantsData(state, data) {
      state.variants = data;
    },
  },
  actions: {
    fetchData(context) {
      fetchMedias().then((data) => {
        context.commit('setData', data);
      });
    },
    fetchVariantData(context) {
      fetchVariantsData().then((data) => {
        context.commit('seVariantsData', data);
      });
    },
  },
});
