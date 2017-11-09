<template>
	<div id="home">
		{{msg}}
		<hr>
		<br>
		<br>
		<router-link to="/login">登录</router-link>
		<Button></Button>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data(){
			return {
				msg:'首页'
			}
		}
	}
</script>

<style scoped>
	#home{
		font-size: 30px;
		color: yellow;
	}
	#home a {
		font-size: 14px;
	}
</style>