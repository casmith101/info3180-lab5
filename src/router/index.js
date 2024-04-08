import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AddMovieFormView from '../views/AddMovieFormView.vue';
import MoviesView from '../views/MoviesView.vue'; // Import the MoviesView component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/movies/create',
      name: 'AddMovieForm',
      component: AddMovieFormView
    },
    // Add the route for displaying movies
    {
      path: '/movies',
      name: 'Movies',
      component: MoviesView
    }
  ]
});

export default router;
