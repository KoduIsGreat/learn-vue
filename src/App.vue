<template>
  <div id="app">
    <div v-if="errors.length">
      <span class="error"> THERE WAS AN ERROR!!!</span>
    </div>
    <div class="row controls">
      <div class ="col-sm-6">
        <div class= "input-group mb-3">
          <div class="input-group-prepend">
            <button 
              type="button" 
              :disabled="nextTodo ? false: true"
              @click="addTodo"
              class="btn btn-outline-secondary"> Add todo!</button>
          </div>
          <input 
            type="text"
            class="form-control"
            placeholder="What to do next..."
            aria-label="Add Todo"
            v-model="nextTodo"/>
          <div class="input-group-append"> 
            <span class="input-group-text"> Completed {{completed}}/{{todos.length}} tasks</span>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class= "input-group mb-3">
          <div class="input-group-prepend">
            <button 
              type="checkbox"
              @click="completedFilter"
              v-bind:class='{active: filterCompleted}'
              class="btn btn-outline-secondary">Filter Completed</button>
          </div>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Type to filter..." 
            aria-label="Filter"
            v-model="search"/>
          <div class="input-group-append"> 
            <span class="input-group-text"> Viewing {{filteredTodos.length}}/{{todos.length}} tasks</span>
          </div>
        </div>
      </div>
    </div>
    <TodoList 
      :todos='filteredTodos' 
      :completeTodo='completeTodo' 
      :removeTodo='removeTodo'/>
    <!-- <Map/> -->
  </div>
</template>

<script>
// import Map from './components/Map.vue'
import TodoList from './components/TodoList.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    TodoList,
    // Map
  },
  created(){
    axios.get('https://api.myjson.com/bins/16yajw')
    .then(response => (this.todos = response.data))
    .catch(errors => this.errors = errors)
  },
  data() {
    return {
      filterCompleted: false,
      nextTodo:null,
      search: '',
      todos: [],
      errors: []
    }
  },
  computed:{
    filteredTodos(){
      let filtered = this.filterCompleted ? 
        this.todos.filter(todo => !todo.completed) : this.todos
      
      return filtered
            .filter(todo =>{
              return todo.taskName.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
    },
    completed(){
      return this.todos.filter(todo => todo.completed).length
    }
  },
  methods:{
    addTodo(){
      this.todos.push({ 
        id : this.todos.length+1, 
        taskName : this.nextTodo
      })
      this.nextTodo= null
    },
    removeTodo(e){
      this.todos = this.todos.filter(todo => todo.taskName !== e)
    },
    completeTodo(e){
      const idx = this.todos.findIndex(todo => todo.taskName === e)
      this.todos[idx].completed=true
    },
    completedFilter(){
      this.filterCompleted = !this.filterCompleted
    }
  }
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
.error{
  margin: 500px;
  text-align: center;
  color: darkred;
  font-size:40px;
}
.controls{
  padding-left: 200px;
  padding-right: 200px;
}
</style>
