<template>
	<section>
		<div class="ratings-content">
			<ul>
				<li>评论</li>
			</ul>
		</div>
	</section>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		created(){
			this.$store.dispatch('getRatings');
		},
		computed:{
			...mapGetters([
				'ratings',
				'goods'
			])
		}
	}
</script>

<style>
	.ratings-content{
		padding:0.625rem;
		font-size: 0.583rem;
	}
</style>