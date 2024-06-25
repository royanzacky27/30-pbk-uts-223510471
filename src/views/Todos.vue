<template>
    <q-page padding>
      <q-card>
        <q-card-section>
          <div class="text-h6">Todos</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="newTodoTitle" placeholder="Add a new todo" @keyup.enter="addTodo" />
          <q-btn color="primary" @click="addTodo">Add Todo</q-btn>
        </q-card-section>
        <q-list>
          <q-item v-for="todo in todos" :key="todo.id" clickable>
            <q-item-section>{{ todo.title }}</q-item-section>
            <q-item-section side>
              <q-btn dense flat round icon="delete" @click="removeTodo(todo.id)" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useTodoStore } from '../stores/todoStore';
  
  export default {
    name: 'Todos',
    setup() {
      const newTodoTitle = ref('');
      const todoStore = useTodoStore();
  
      const addTodo = () => {
        if (newTodoTitle.value.trim()) {
          todoStore.addTodo({
            id: Date.now(),
            title: newTodoTitle.value,
          });
          newTodoTitle.value = '';
        }
      };
  
      const removeTodo = (id) => {
        todoStore.removeTodo(id);
      };
  
      return {
        newTodoTitle,
        todos: todoStore.todos,
        addTodo,
        removeTodo,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus di sini jika diperlukan */
  </style>
  