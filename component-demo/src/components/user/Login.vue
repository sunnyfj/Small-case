<template>
	<div id="login">
		{{msg}}
		<Button></Button>
	</div>
</template>



<script>
	export default{
		data(){
			return {
				msg:'用户登录'
			}
		}
	}
</script>


<style scoped>
	#login{
		font-size: 30px;
		color: red;
		text-shadow: 2px 2px 5px #000;
	}
</style>


