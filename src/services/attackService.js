// src/services/attackService.js
import apiClient from './api';

export default {
    getUserById(id) {
        return apiClient.get(`/user/${id}`);
    }
};
