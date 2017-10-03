import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'


import VueRouter from 'vue-router'
import Firebase from 'firebase'
import VueTimeago from 'vue-timeago'
import Vuex from 'vuex'

import Routes from './routes'

const router = new VueRouter({
    routes: Routes
});


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
});



//store
import store from './store'

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
