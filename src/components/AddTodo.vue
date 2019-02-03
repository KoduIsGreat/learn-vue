<template>
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
      <span class="input-group-text"> Completed {{completed}}/{{total}} tasks</span>
    </div>
  </div>
</template>
<script>
import EventBus from '../eventbus.js'
import { ADD_TASK} from '../events.js'
export default {
  name: 'AddTodo',
  data(){
    return {
      nextTodo: null
    }
  },
  props:{
    completed: Number,
    total: Number
  },
  methods:{
    addTodo(){
      EventBus.$emit(ADD_TASK, this.nextTodo)
      this.nextTodo = null
    }
  }
}
</script>
