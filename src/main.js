// src/main.js
import { createApp } from 'vue';  // Correct import for Vue 3
import App from './App.vue';
import router from './router';  // Correct path to your Vue Router
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import DefaultLayout from './layouts/DefaultLayout.vue'; // Ensure this path is correct


const app = createApp(App);  // Create Vue 3 app instance

app.component('DefaultLayout', DefaultLayout);
app.use(router);  // Use the router instance
app.use(Toast, { timeout: 5000 });
app.mount('#app');  // Mount the app to the DOM element with id "app"