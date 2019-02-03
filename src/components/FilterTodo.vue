<template>
  <div class= "input-group mb-3">
    <div class="input-group-prepend">
      <button 
        type="checkbox"
        @click="toggleFilter"
        v-bind:class='{active: filterCompleted}'
        class="btn btn-outline-secondary">Filter Completed</button>
    </div>
    <input 
      type="text" 
      class="form-control" 
      placeholder="Type to filter..."
      v-on:input='changeFilterText()'
      aria-label="Filter"
      v-model="search"/>
    <div class="input-group-append"> 
      <span class="input-group-text"> Viewing {{viewing}}/{{total}} tasks</span>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventbus.js'
import {TOGGLE_FILTER, UPDATE_FILTER} from '../events.js'
export default {
  name: 'FilterTodo',
  props:{
    viewing: Number,
    total: Number,
    filterCompleted: Boolean,
  },
  data(){
    return {
      search: ''
    }
  },
  methods:{
    toggleFilter(){
      EventBus.$emit(TOGGLE_FILTER)
    },
    changeFilterText(){
      EventBus.$emit(UPDATE_FILTER, this.search)
    }
  }
}
</script>

