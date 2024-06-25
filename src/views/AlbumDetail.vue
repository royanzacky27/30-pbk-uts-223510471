<template>
    <q-page>
      <q-card>
        <q-card-section>
          <div class="text-h6">Album Detail</div>
        </q-card-section>
        <q-list>
          <q-item v-for="photo in photos" :key="photo.id" clickable @click="showPhoto(photo.url)">
            <q-item-section>
              <img :src="photo.thumbnailUrl" style="width: 100px; height: 100px; object-fit: cover;" />
            </q-item-section>
          </q-item>
        </q-list>
        <q-dialog v-model="dialog" persistent>
          <q-card>
            <q-card-section>
              <img :src="photoUrl" style="width: 100%; height: auto;" />
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="Close" @click="dialog = false" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  import { useAlbumStore } from '../stores/albumStore';
  import { ref } from 'vue';
  
  export default {
    name: 'AlbumDetail',
    setup() {
      const route = useRoute();
      const albumStore = useAlbumStore();
      const dialog = ref(false);
      const photoUrl = ref('');
  
      albumStore.fetchPhotos(route.params.id);
  
      const showPhoto = (url) => {
        photoUrl.value = url;
        dialog.value = true;
      };
  
      return {
        photos: albumStore.photos,
        dialog,
        photoUrl,
        showPhoto,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus di sini jika diperlukan */
  </style>
  