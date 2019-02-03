<template>
  <div class='todo-item' v-bind:class='{completed: completed}'>
    <div class="row">
      <div class="col-sm-8">
        {{taskName}}
      </div>
      <div v-if="!completed" class="col-sm-4">
        <button @click="completeTask()" class="btn btn-success"> Done</button>
        <button @click="removeTask()" class="btn btn-danger"> Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventbus.js'
export default {
  name: 'TodoItem',
  props: {
    taskName: String,
    completed: Boolean
  },
  methods:{
    removeTask(){
      EventBus.$emit('task-removed', this.taskName)
    },
    completeTask(){
      EventBus.$emit('task-completed', this.taskName)
    }
  }
}
</script>

<style scoped>
.todo-item{
 color:red;
 text-align: center;
 font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 margin-left: 200px;
 margin-right:200px;
 margin-top: 5px;
}
.completed {
  color:black;
  background-color:rgb(76, 180, 76);
  opacity: 0.2;
}
.remove-btn{
  padding-left:150px;
}
</style>

