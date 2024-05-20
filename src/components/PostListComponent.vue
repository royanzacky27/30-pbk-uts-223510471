<template>
    <div>
      <div>
        <label for="userSelect">Pilih Pengguna:</label>
        <select id="userSelect" v-model="selectedUser">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </div>
  
      <div class="post-container">
        <h2>Daftar Postingan</h2>
        <div class="post" v-for="post in filteredPosts" :key="post.id">
          <div class="post-details">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
          <div class="post-author">
            <p><strong>Author:</strong> {{ getUserById(post.userId).name }}</p>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      users: Array,
      posts: Array
    },
    data() {
      return {
        selectedUser: null
      };
    },
    computed: {
      filteredPosts() {
        if (!this.selectedUser) {
          return this.posts;
        }
        return this.posts.filter(post => post.userId === this.selectedUser);
      }
    },
    methods: {
      getUserById(userId) {
        return this.users.find(user => user.id === userId);
      }
    }
  };
  </script>
  
  <style scoped>
  .post-container {
    max-width: 800px;
    margin: auto;
  }
  
  .post {
    background-color: #060606;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .post-details {
    flex: 1;
  }
  
  .post h3 {
    color: #ffffff;
  }
  
  .post-author {
    flex-shrink: 0;
    text-align: right;
  }
  
  .post-author p {
    margin: 0;
  }
  </style>
  