<template>
  <div class='todo-item' v-bind:class='{completed: completed}'>
    <div class="row">
      <div class="col-sm-8">
        {{taskName}}
      </div>
      <div v-if="!completed" class="col-sm-4">
        <button @click="completeTodo(taskName)" class="btn btn-success"> Done</button>
        <button @click="removeTodo(taskName)" class="btn btn-danger"> Remove</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',
  props: {
    removeTodo: Function,
    completeTodo: Function,
    taskName: String,
    completed: Boolean
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
  color:darkgreen;
  background-color:grey;
  opacity: 0.4;
}
.remove-btn{
  padding-left:150px;
}
</style>

