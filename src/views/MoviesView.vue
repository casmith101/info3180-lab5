<template>
    <div class="movies-container">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="movie.poster" :alt="movie.title" class="movie-poster"/>
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  let movies = ref([]);
  
  function fetchMovies() {
    fetch('/api/v1/movies')
      .then(response => response.json())
      .then(data => {
        movies.value = data.movies;
      })
      .catch(error => console.error('Error fetching movies:', error));
  }
  
  onMounted(fetchMovies);
  </script>
  
  <style scoped>
  .movies-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .movie-card {
    width: 200px;
    margin: 20px;
  }
  .movie-poster {
    width: 100%;
    height: auto;
  }
  </style>
  