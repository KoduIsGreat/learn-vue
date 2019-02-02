<template>
  <div class='todo-item'>
    {{taskName}}
    <span v-if='completed'> COMPLETED</span>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    taskName: String,
    completed: Boolean
  }
}
</script>

<style scoped>
</style>

