// src/services/soldierService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your backend API URL

export default {
    // Fetch all soldiers
    async getAll() {
        try {
            const response = await axios.get(`${API_BASE_URL}/soldiers`);
            return response.data;
        } catch (error) {
            console.error('Error fetching soldiers:', error);
            throw error;
        }
    },

    // Fetch a specific soldier by ID
    async getById(id) {
        try {
            const response = await axios.get(`${API_BASE_URL}/soldiers/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching soldier by ID:', error);
            throw error;
        }
    },

    // Create a new soldier
    async create(soldierData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/soldiers`, soldierData);
            return response.data;
        } catch (error) {
            console.error('Error creating soldier:', error);
            throw error;
        }
    },

    // Update an existing soldier by ID
    async update(id, soldierData) {
        try {
            const response = await axios.put(`${API_BASE_URL}/soldiers/${id}`, soldierData);
            return response.data;
        } catch (error) {
            console.error('Error updating soldier:', error);
            throw error;
        }
    },

    // Delete a soldier by ID
    async delete(id) {
        try {
            const response = await axios.delete(`${API_BASE_URL}/soldiers/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting soldier:', error);
            throw error;
        }
    }
};
