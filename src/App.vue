<template>
  <div>
    <div class="header">
      <button @click="selectTab('posts')" :class="{ active: selectedTab === 'posts' }">Post</button>
      <button @click="selectTab('todos')" :class="{ active: selectedTab === 'todos' }">Todos</button>
    </div>

    <div v-if="selectedTab === 'posts'">
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

    <div v-else-if="selectedTab === 'todos'">
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
    </div>

    <div v-else>
      <p>Tab belum dipilih</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'posts',
      users: [],
      posts: [],
      todos: [],
      selectedUser: null,
      newTodo: {
        title: '',
        schedule: ''
      }
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
    addTodo() {
      if (this.newTodo.title && this.newTodo.schedule) {
        this.todos.push({
          id: this.todos.length + 1,
          title: this.newTodo.title,
          schedule: this.newTodo.schedule
        });
        this.newTodo.title = '';
        this.newTodo.schedule = '';
      } else {
        alert('Judul dan Jadwal tidak boleh kosong!');
      }
    },
    selectTab(tabName) {
      this.selectedTab = tabName;
    },
    getUserById(userId) {
      return this.users.find(user => user.id === userId);
    }
  }
};
</script>

<style>
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