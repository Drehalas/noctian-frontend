// src/store/modules/game.js

import gameService from '../../services/gameService';

const state = {
    gameData: {},
    loading: false,
    error: null,
};

const getters = {
    getGameData: (state) => state.gameData,
    isLoading: (state) => state.loading,
    fetchError: (state) => state.error,
};

const actions = {
    async fetchGameData({ commit }) {
        commit('setLoading', true);
        try {
            const response = await gameService.getAll();
            commit('setGameData', response.data);
            commit('setLoading', false);
        } catch (error) {
            commit('setError', error.message);
            commit('setLoading', false);
        }
    },
};

const mutations = {
    setGameData: (state, data) => (state.gameData = data),
    setLoading: (state, isLoading) => (state.loading = isLoading),
    setError: (state, error) => (state.error = error),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
