<template>
  <div>
    <TodoItem
      v-for="item in todos" 
      :key='item.id' 
      :taskName="item.taskName"
      :completed="item.completed"/>
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
    todos: Array
  }
}
</script>

<style scoped>

</style>
