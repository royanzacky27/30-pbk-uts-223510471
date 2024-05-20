<template>
    <div>
      <HeaderComponent :selectedTab="selectedTab" @select-tab="selectTab" />
  
      <div v-if="selectedTab === 'posts'">
        <PostListComponent :users="users" :posts="posts" />
      </div>
  
      <div v-else-if="selectedTab === 'todos'">
        <TodoListComponent :todos="todos" @add-todo="addTodo" />
      </div>
  
      <div v-else>
        <p>Tab belum dipilih</p>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderComponent from './HeaderComponent.vue';
  import PostListComponent from './PostListComponent.vue';
  import TodoListComponent from './TodoListComponent.vue';
  
  export default {
    components: {
      HeaderComponent,
      PostListComponent,
      TodoListComponent
    },
    data() {
      return {
        selectedTab: 'posts',
        users: [],
        posts: [],
        todos: []
      };
    },
    created() {
      this.fetchUsers();
      this.fetchPosts();
    },
    methods: {
      fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            this.users = data;
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      },
      fetchPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => {
            this.posts = data;
          })
          .catch(error => {
            console.error('Error fetching posts:', error);
          });
      },
      addTodo(todo) {
        this.todos.push({
          id: this.todos.length + 1,
          title: todo.title,
          schedule: todo.schedule
        });
      },
      selectTab(tabName) {
        this.selectedTab = tabName;
      }
    }
  };
  </script>
  
  <style>
  /* Global styles */
  </style>
  