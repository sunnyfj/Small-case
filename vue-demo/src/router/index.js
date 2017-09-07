import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/Goods.vue'
import Ratings from '../components/ratings/Ratings.vue'
import Store from '../components/store/Store.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/goods',
  		component:Goods
  	},
  	{
  		path:'/ratings',
  		component:Ratings
  	},
  	{
  		path:'/store',
  		component:Store
  	},
  ],
  linkActiveClass:'active'
})
