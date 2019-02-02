<template>
  <div id="app">
    <TodoList :todos='todos'/>
    <Map/>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import TodoList from './components/TodoList.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    TodoList,
    Map
  },
  created(){
    axios.get('https://api.myjson.com/bins/19z6b0')
    .then(response => (this.todos = response.data))
    .catch(errors => this.errors = errors)
  },
  data() {
    return {
      todos: [],
      errors: []
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
