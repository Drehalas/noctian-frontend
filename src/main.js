// src/main.js
import { createApp } from 'vue';  // Correct import for Vue 3
import App from './App.vue';
import store from './store'; // Correct path to your Vuex store
import router from './router';  // Correct path to your Vue Router

const app = createApp(App);  // Create Vue 3 app instance

app.use(router);  // Use the router instance
app.use(store);   // Use the Vuex store instance

app.mount('#app');  // Mount the app to the DOM element with id "app"