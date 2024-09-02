// src/services/skillBuffService.js

import apiClient from './api'; // Import the configured Axios instance

// Function to fetch all skill buffs
export const fetchAllSkillBuffs = async () => {
    try {
        const response = await apiClient.get('/skill-buffs');
        return response.data;
    } catch (error) {
        console.error('Error fetching skill buffs:', error);
        throw error;
    }
};

// Function to fetch a specific skill buff by ID
export const fetchSkillBuffById = async (skillBuffId) => {
    try {
        const response = await apiClient.get(`/skill-buffs/${skillBuffId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching skill buff by ID:', error);
        throw error;
    }
};

// Function to create a new skill buff
export const createSkillBuff = async (newSkillBuff) => {
    try {
        const response = await apiClient.post('/skill-buffs', newSkillBuff);
        return response.data;
    } catch (error) {
        console.error('Error creating skill buff:', error);
        throw error;
    }
};

// Function to update a skill buff
export const updateSkillBuff = async (skillBuffId, updatedSkillBuff) => {
    try {
        const response = await apiClient.put(`/skill-buffs/${skillBuffId}`, updatedSkillBuff);
        return response.data;
    } catch (error) {
        console.error('Error updating skill buff:', error);
        throw error;
    }
};

// Function to delete a skill buff
export const deleteSkillBuff = async (skillBuffId) => {
    try {
        const response = await apiClient.delete(`/skill-buffs/${skillBuffId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting skill buff:', error);
        throw error;
    }
};
