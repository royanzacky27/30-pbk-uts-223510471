import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../views/Todos.vue';
import Posts from '../views/Posts.vue';
import Albums from '../views/Albums.vue';
import AlbumDetail from '../views/AlbumDetail.vue';

const routes = [
  { path: '/todos', component: Todos },
  { path: '/posts', component: Posts },
  { path: '/albums', component: Albums },
  { path: '/albums/:id', component: AlbumDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
