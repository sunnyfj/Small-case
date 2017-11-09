import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../components/user/Login.vue'


Vue.use(Router)

export default new Router({
  	routes: [
   		{
      		path: '/',
      		component: Home
    	},
    	{
    		path: '/login',
    		component:Login
    	}
  	]
})
