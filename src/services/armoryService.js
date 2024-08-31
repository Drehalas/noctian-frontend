// src/services/armoryService.js
import apiClient from './api';

export default {
    getAllArmories() {
        return apiClient.get('/armories');
    },
    getArmoryById(id) {
        return apiClient.get(`/armories/${id}`);
    },
    createArmory(data) {
        return apiClient.post('/armories', data);
    },
    updateArmory(id, data) {
        return apiClient.put(`/armories/${id}`, data);
    },
    deleteArmory(id) {
        return apiClient.delete(`/armories/${id}`);
    },
};
