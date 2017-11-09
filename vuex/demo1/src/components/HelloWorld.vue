<template>
  <div class="hello">
      <p></p>
      <button @click="increment">增加</button>
      <button @click="decrement">减少</button>
      <p>当前数字为：{{count}}</p>
      <p>{{isEvenOrOdd}}</p>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  /*computed:{ //方式1 
    count(){
      return this.$store.state.count;
    }
  }*/
  computed:mapGetters(['count','isEvenOrOdd']),
  methods:mapActions([
    'increment',
    'decrement'
  ])
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
