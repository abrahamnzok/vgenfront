/* eslint-disable import/first,import/no-webpack-loader-syntax */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// eslint-disable-next-line import/first
import App from './App';
import '!style-loader!css-loader!tachyons/css/tachyons.css';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
