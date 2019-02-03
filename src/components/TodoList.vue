<template>
  <div>
    <ul class='list-group'>
      <TodoItem
        class='list-group-item'
        v-for="item in todos" 
        :key='item.id'
        :completeTodo='completeTodo' 
        :removeTodo='removeTodo' 
        :taskName="item.taskName"
        :completed="item.completed"/>
    </ul>
  </div>

</template>

<script>
import TodoItem from './TodoItem'
export default {
  
  name: 'TodoList',
  components:{
    TodoItem
  },
  props: {
    todos: Array,
    completeTodo: Function,
    removeTodo: Function
  }
}
</script>

<style scoped>

</style>
