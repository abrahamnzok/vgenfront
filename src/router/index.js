import Vue from 'vue';
import Router from 'vue-router';
import vgenfront from '@/components/VideoGen';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoGen',
      component: vgenfront,
    },
  ],
});
