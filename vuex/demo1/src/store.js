

/*vuex配置*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = { //属性 数据
	count:9
}

var getters = { //获取属性
	count(state){
		return state.count;
	},
	isEvenOrOdd(state){
		return state.count%2==0?'偶数':'奇数';
	}
}

var actions = { //用来定义方法的  动作 要执行的操作
	/*increment(context){  //context 包含 提交  dispach state  commit
		context.commit();
	}*/

	increment({commit,state}){
		commit('increment');  //指定一个标记 类型名
	},
	decrement({commit,state}){
		if(state.count > 5){
			commit('decrement');
		}
	}
}

var mutations = { //处理状态的改变 数据的改变
	increment(state){
		state.count++;
	},
	decrement(state){
		state.count--;
	}
}



const store =  new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
export default store;













