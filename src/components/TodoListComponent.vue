<template>
    <div class="todos-container">
      <div>
        <h3>Tambah Kegiatan</h3>
        <input type="text" placeholder="Judul Kegiatan" v-model="newTodo.title">
        <input type="text" placeholder="Jadwal (Contoh: 2024-05-14)" v-model="newTodo.schedule">
        <button @click="addTodo">Tambah</button>
      </div>
      
      <div v-if="todos.length > 0">
        <h2>Jadwal Kegiatan</h2>
        <ul class="todos-list">
          <li v-for="todo in todos" :key="todo.id">
            <span>{{ todo.title }} - {{ todo.schedule }}</span>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Belum ada kegiatan</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      todos: Array
    },
    data() {
      return {
        newTodo: {
          title: '',
          schedule: ''
        }
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.title && this.newTodo.schedule) {
          this.$emit('add-todo', { ...this.newTodo });
          this.newTodo.title = '';
          this.newTodo.schedule = '';
        } else {
          alert('Judul dan Jadwal tidak boleh kosong!');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .todos-container {
    max-width: 600px;
    margin: auto;
  }
  
  .todos-container div {
    margin-bottom: 15px;
  }
  
  .todos-container input[type="text"], .todos-container button {
    padding: 8px;
    border: 1px solid #ffffff;
    border-radius: 5px;
  }
  
  .todos-container input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .todos-container button {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  
  .todos-list {
    list-style: none;
    padding: 0;
  }
  
  .todos-list li {
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
  }
  </style>
  