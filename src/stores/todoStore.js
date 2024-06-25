import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref([]);

  const addTodo = (todo) => {
    todos.value.push(todo);
  };

  const removeTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
  };

  return {
    todos,
    addTodo,
    removeTodo,
  };
});
