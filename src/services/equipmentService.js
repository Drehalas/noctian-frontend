// src/services/equipmentService.js

import apiClient from './api';  // Import your configured Axios instance

// Function to fetch all equipment
export const fetchAllEquipment = async () => {
    try {
        const response = await apiClient.get('/equipment');
        return response.data;  // Return the data part of the response
    } catch (error) {
        console.error('Error fetching equipment:', error);
        throw error;  // Rethrow the error to handle it in the component or globally
    }
};

// Function to fetch a specific equipment by ID
export const fetchEquipmentById = async (equipmentId) => {
    try {
        const response = await apiClient.get(`/equipment/${equipmentId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching equipment by ID:', error);
        throw error;
    }
};

// Function to create new equipment
export const createEquipment = async (newEquipment) => {
    try {
        const response = await apiClient.post('/equipment', newEquipment);
        return response.data;
    } catch (error) {
        console.error('Error creating equipment:', error);
        throw error;
    }
};

// Function to update equipment
export const updateEquipment = async (equipmentId, updatedEquipment) => {
    try {
        const response = await apiClient.put(`/equipment/${equipmentId}`, updatedEquipment);
        return response.data;
    } catch (error) {
        console.error('Error updating equipment:', error);
        throw error;
    }
};

// Function to delete equipment
export const deleteEquipment = async (equipmentId) => {
    try {
        const response = await apiClient.delete(`/equipment/${equipmentId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting equipment:', error);
        throw error;
    }
};
