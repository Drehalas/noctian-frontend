// src/services/factionService.js
import apiClient from './api';

export default {
    getAllFactions() {
        return apiClient.get('/factions');
    },
    getFactionById(id) {
        return apiClient.get(`/factions/${id}`);
    },
    createFaction(data) {
        return apiClient.post('/factions', data);
    },
    updateFaction(id, data) {
        return apiClient.put(`/factions/${id}`, data);
    },
    deleteFaction(id) {
        return apiClient.delete(`/factions/${id}`);
    },
};
