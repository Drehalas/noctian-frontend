// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import the router

const app = createApp(App);

app.use(router);  // Use the router instance
new Vue({
    router,
    store,  // Register the store
    render: (h) => h(App),
}).mount('#app');