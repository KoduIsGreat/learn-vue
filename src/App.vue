<template>
  <div id="app">
    <div v-if="errors.length">
      <span class="error"> THERE WAS AN ERROR!!!</span>
    </div>
    <div class="row controls">
      <div class ="col-sm-6">
        <AddTodo :completed='completed' :total='todos.length'/>
      </div>
      <div class="col-sm-6">
        <FilterTodo 
          :viewing='filteredTodos.length' 
          :total='todos.length'
          :filterComplete='filterCompleted'/>
      </div>
    </div>
    <TodoList :todos='filteredTodos'/>
    <!-- <Map/> -->
  </div>
</template>

<script>
// import Map from './components/Map.vue'
import axios from 'axios'
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'
import EventBus from './eventbus.js'
import * as Events from './events.js'
export default {
  name: 'app',
  components: {
    TodoList,
    AddTodo,
    FilterTodo
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
      const filtered = this.filterCompleted ? 
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
    addTask(e){
      this.todos.push({ 
        id : this.todos.length+1, 
        taskName : e
      })
    },
    removeTask(e){
      this.todos = this.todos.filter(todo => todo.taskName !== e)
    },
    completeTask(e){
      const idx = this.todos.findIndex(todo => todo.taskName === e)
      this.todos[idx].completed=true
    },
    toggleFilter(){
      this.filterCompleted = !this.filterCompleted
    }
  },
  mounted(){
    EventBus.$on(Events.REMOVE_TASK, payload => this.removeTask(payload) )
    EventBus.$on(Events.COMPLETE_TASK, payload => this.completeTask(payload))
    EventBus.$on(Events.ADD_TASK, payload => this.addTask(payload))
    EventBus.$on(Events.TOGGLE_FILTER, (filter) => this.filterCompleted = filter)
    EventBus.$on(Events.UPDATE_FILTER, (search) => this.search = search)
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
