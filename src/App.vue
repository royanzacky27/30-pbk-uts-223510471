<template>
  <div id="app">
    <HeaderComponent :selectedTab="selectedTab" @select-tab="selectTab" />
    <MainComponent
      :selectedTab="selectedTab"
      :users="users"
      :posts="posts"
      :todos="todos"
      @add-todo="addTodo"
    />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
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
/* Styles can be added here */
</style>
