<template>
  <div>
    <button @click="count++">
      Count is: {{ count }}
    </button>
    <div data-test="app-message">{{ message }}</div>

    <ol>
      <li v-for="todo in todos">
        <span :class="{ active: todo.active }">{{ todo.text }}</span>
      </li>
    </ol>
  </div>

</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: 'Hello Vue!',
      todos: [
        { text: 'Learn JavaScript', active: false },
        { text: 'Learn Vue', active: true },
        { text: 'Build something awesome', active: false },
        { text: 'Python for dummies', active: false },
      ]
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>