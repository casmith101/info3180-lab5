<template>
    <form @submit.prevent="saveMovie" id="movieForm">
      <div class="form-group mb-3">
        <label for="title" class="form-label">Movie Title</label>
        <input type="text" id="title" name="title" class="form-control" v-model="movie.title"/>
      </div>
      <div class="form-group mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea id="description" name="description" class="form-control" v-model="movie.description"></textarea>
      </div>
      <div class="form-group mb-3">
        <label for="poster" class="form-label">Movie Poster</label>
        <input type="file" id="poster" name="poster" class="form-control" @change="handleFileUpload"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const movie = ref({
    title: '',
    description: ''
  });
  const poster = ref(null);
  const csrf_token = ref('');
  
  function handleFileUpload(event) {
    poster.value = event.target.files[0];
  }
  
  function saveMovie() {
    let formData = new FormData();
    formData.append('title', movie.value.title);
    formData.append('description', movie.value.description);
    formData.append('poster', poster.value);
  
    fetch("/api/v1/movies", {
      method: 'POST',
      body: formData,
      headers: {
        'X-CSRFToken': csrf_token.value
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }
  
  onMounted(() => {
    fetch('/api/v1/csrf-token')
      .then((response) => response.json())
      .then((data) => {
        csrf_token.value = data.csrf_token;
      });
  });
  </script>
  