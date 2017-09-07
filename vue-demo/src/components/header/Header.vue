<template>
	<section>
		<div class="header clearfix">
			<div class="logo fl">
				<img :src="seller.avatar" alt="" width="80">
			</div>
			<div class="storename fl">
				{{seller.name}}
			</div>
			<div class="store-menu fr" @click="showDetail">
				<img src="../../assets/sushi-1.png" alt="" width="40">
			</div>
		</div>

		<!-- 弹出层 -->
		<Detail></Detail>
	</section>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Detail from '../detail/Detail.vue'

	export default {
		created(){
			this.$store.dispatch('getSeller');
		},
		computed:{
			...mapGetters([
				'seller'
			])
		},
		components:{
			Detail
		},
		methods:{
			showDetail(){
				this.$store.dispatch('showDetail');
			}
		}
	}

</script>

<style>
	.header{
		height:3.333rem;
		background:#f4f4f4;
		font-size: 0.583rem;
		padding:10px 15px;
	}
	.logo{
		width: 3.333rem;
		height:3.333rem;
		border-radius:50%;
		overflow: hidden;
	}
	.logo img{
		width: 100%;
		height:100%;
	}
	.storename{
		font-size:0.625rem;
		color:#333;
		height:3.333rem;
		line-height: 3.333rem;
		margin-left: 0.625rem;
	}
	.store-menu{
		margin-top:0.833rem;
	}
	.store-menu img{
		width: 1.666rem;
		height: 1.666rem;
	}
</style>