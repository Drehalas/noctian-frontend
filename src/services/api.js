// src/services/api.js

import axios from 'axios';

// Create an Axios instance with base settings
const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api', // Base URL for the API
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // Set timeout to 10 seconds
});

// Interceptors can be added here if you need to handle request or response transformations globally

export default apiClient;
