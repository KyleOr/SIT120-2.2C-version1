import { createRouter, createWebHashHistory } from 'vue-router'; 

import InputPage from '@/views/InputPage.vue';
import HomePage from '@/views/HomePage.vue';

// Create the router instance
const router = createRouter({
  history: createWebHashHistory(), 
  routes: [
    {
      path: '/',
      component: HomePage,
      props: true,
    },
    {
      path: '/input',
      component: InputPage,
    },
  ],
});


export default router; // Export the router instance
