// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, //配置store选项，会自动将store对象注入到所有子组件中，在子组件中通过this.$store访问该store对象
  template: '<App/>',
  components: { App }
})
