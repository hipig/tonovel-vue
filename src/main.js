// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { mixin as clickaway } from 'vue-clickaway'
// import { ValidationProvider, localize, extend } from 'vee-validate'
// import zh_CN from 'vee-validate/dist/locale/zh_CN.json'

import "nprogress/nprogress.css"
import "./assets/css/app.css"

Vue.config.productionTip = false
Vue.mixin(clickaway)

// Vue.component('validation-provider', ValidationProvider)
// localize('zh_CN', zh_CN)
// extend('required', {
//   validate (value) {
//     return {
//       required: true,
//       valid: ['', null, undefined].indexOf(value) === -1
//     };
//   },
//   computesRequired: true
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
