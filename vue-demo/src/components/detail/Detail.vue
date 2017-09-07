<template>
	<section>
		<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
			<div class="detail" v-show="detailShow">
				<div class="detail-content">
					<h3>{{seller.name}}</h3>
					<p>{{seller.bulletin}}</p>
					<ul>
						<li v-for="item in seller.supports">
							· {{item.description}}
						</li>
					</ul>
				</div>
				<div class="close" @click="hideDetail">&times;</div>
			</div>
		</transition>
	</section>
</template>

<script>
	import {mapGetters} from 'vuex'
	import 'animate.css/animate.css'

	export default {
		computed:{
			...mapGetters([
				'detailShow',
				'seller'
			])
		},
		methods:{
			hideDetail(){
				this.$store.dispatch('hideDetail');
			}
		}
	}
</script>

<style>
	.detail{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 666;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(7,17,27,0.8);
		color:#fff;
		padding:0.833rem;
	}
	.close{
		position: absolute;
		left:0.833rem;
		top:0.833rem;
		font-size: 1.25rem;
		color:#fff;
	}
	.detail-content h3{
		font-size: 0.666rem;
		margin-top:1.666rem;
		margin-bottom:15px;
	}
	.detail-content p{
		text-indent:2em;
		width: 14.25rem;
		font-size: 0.583rem;
		line-height: 0.85rem;
	}
	.detail-content ul{
		margin-left: 0.833rem;
	}
	.detail-content ul li{
		font-size: 0.583rem;
		margin-top:0.625rem;
	}
</style>