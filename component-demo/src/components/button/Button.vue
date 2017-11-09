<template>
	<button>{{msg}}</button>
</template>

<script>
	export default {
		data(){
			return {
				msg: 'btn'
			}
		}
	}
</script>

<style scoped>
	button {
		width: 100px;
		height: 40px;
		box-shadow: 6px 6px 30px #000;
		font-size: 14px;
		background: #f57d00;
		border-radius: 8px;
		outline: none;
	}	

</style>