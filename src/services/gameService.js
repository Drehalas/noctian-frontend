// src/services/gameService.js

import apiClient from './api'; // Import the configured Axios instance

// Function to fetch all game settings/data
export const fetchAllGameSettings = async () => {
    try {
        const response = await apiClient.get('/game-settings');
        return response.data;
    } catch (error) {
        console.error('Error fetching game settings:', error);
        throw error;
    }
};

// Function to fetch specific game settings by ID
export const fetchGameSettingById = async (gameSettingId) => {
    try {
        const response = await apiClient.get(`/game-settings/${gameSettingId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching game setting by ID:', error);
        throw error;
    }
};

// Function to create new game settings
export const createGameSetting = async (newGameSetting) => {
    try {
        const response = await apiClient.post('/game-settings', newGameSetting);
        return response.data;
    } catch (error) {
        console.error('Error creating game setting:', error);
        throw error;
    }
};

// Function to update game settings
export const updateGameSetting = async (gameSettingId, updatedGameSetting) => {
    try {
        const response = await apiClient.put(`/game-settings/${gameSettingId}`, updatedGameSetting);
        return response.data;
    } catch (error) {
        console.error('Error updating game setting:', error);
        throw error;
    }
};

// Function to delete game settings
export const deleteGameSetting = async (gameSettingId) => {
    try {
        const response = await apiClient.delete(`/game-settings/${gameSettingId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting game setting:', error);
        throw error;
    }
};
