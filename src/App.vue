<template>
  <h1>hello</h1>
  <input type="text" v-model="state.val" @keyup.enter='addTodo'>
  <div>{{state.value}}</div>
  <ul>
    <li v-for="(todo, index) in state.todos" :key="index">
      {{todo.name}}
    </li>
  </ul>
  <div>
    total: {{total}}
  </div>
</template>

<script>
import { computed, reactive } from 'vue'

function useAddTodo() {
  const state = reactive({
    todos: [{
      name: 'hanffneg',
      done: false,
    }, {
      name: 'zhouzhou',
      done: false,
    }],
    val: '',
  })
  const total = computed(() => state.todos.length)
  function addTodo() {
    state.todos.push({
      name: state.val,
      done: false,
    })
    state.val = ''
  }
  return {
    state,
    total,
    addTodo,
  }
}
export default {
  setup() {
    let {
      state,
      total,
      addTodo,
    } = useAddTodo()
    return {
      state,
      total,
      addTodo,
    }
  },

}

</script>

<style>

</style>
