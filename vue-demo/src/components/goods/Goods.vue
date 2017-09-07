<template>
	<section>
		<div class="goods">
			<div class="menu-wrapper">
				<ul>
					<li v-for="item in goods">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="foods-wrapper">
				<ul>
					<li v-for="item in goods">
						<h2>{{item.name}}</h2>
						<ul>
							<li v-for="food in item.foods" class="clearfix">
								<div class="fl">
									<img :src="food.icon" alt="">
								</div>
								<div class="foot-content fl">
									<p>菜名：<span>{{food.name}}</span></p>
									<p>价格：<span>￥{{food.price}}</span></p>
									<p>销售量：<span>{{food.sellCount}}</span></p>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default{
		created(){
			this.$store.dispatch('getGoods');
		},
		computed:{
			...mapGetters([
				'goods'
			])
		}

	}
</script>

<style>
	.goods{
		display: flex;
		width: 100%;
		height:23rem;
		overflow: hidden;
	}
	.menu-wrapper{
		flex:0 0 3.333rem;
		width: 3.333rem;
		background-color: #f3f5f7;
		padding:0 0.625rem;
	}
	.menu-wrapper ul li{
		margin-top:0.833rem;
		color: #222;
		font-size: 0.583rem;
	}
	.foods-wrapper{
		flex:1;
		margin-left: 0.625rem;
	}
	.foods-wrapper h2{
		font-size:0.583rem;
		color:#ff7300;
		margin:0.625rem 0 ;
	}
	.foods-wrapper ul li{
		margin-top:0.416rem;
	}
	.foods-wrapper ul li img{
		width: 4.75rem;
		height: 4.75rem;
		border-radius: 8px;
	}
	.foot-content{
		margin-top: 1rem;
	}
	.foods-wrapper ul li p{
		margin-left: 0.416rem;
		font-size: 0.583rem;
		color:#222;
		line-height: 0.833rem;
	}
</style>