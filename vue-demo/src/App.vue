<template>
	<div id="app">
		<v-header></v-header>
		<div class="tab">
			<div class="tab-item">
		    	<router-link to="/goods">商品</router-link>
		    </div>
		    <div class="tab-item">
		        <router-link to="/ratings">评论</router-link>
		    </div>
		    <div class="tab-item">
		        <router-link to="/store">商家</router-link>
		    </div>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	import Header from './components/header/Header.vue'
	export default {
		components:{
	    	'v-header':Header
	    }
	}
</script>

<style>
	.tab{
		display: flex;
		width: 100%;
		height:1.666rem;
		border-bottom: 1px solid #e1e1e1;
	}
	.tab-item{
		flex:1;
		text-align: center;
		line-height: 1.666rem;
	}
	.tab-item a{
        font-size: 0.666rem;
        color: #222;
        display: block;
    }
    .tab-item a.active{
    	color:#ff7300;
    }
</style>
