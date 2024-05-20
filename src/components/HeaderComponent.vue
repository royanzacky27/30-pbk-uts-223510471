<template>
    <div class="header">
      <button @click="selectTab('posts')" :class="{ active: selectedTab === 'posts' }">Post</button>
      <button @click="selectTab('todos')" :class="{ active: selectedTab === 'todos' }">Todos</button>
      <slot></slot> <!-- Slot untuk konten tambahan -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedTab: {
        type: String,
        required: true
      }
    },
    methods: {
      selectTab(tabName) {
        this.$emit('select-tab', tabName);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles bisa ditambahkan di sini */
  .header {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .header button {
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
  }
  
  .header button.active {
    background-color: #0056b3;
  }
  </style>
  