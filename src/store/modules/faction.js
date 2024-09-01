// src/store/modules/faction.js

import factionService from '../../services/factionService';

const state = {
    factions: [],
    loading: false,
    error: null,
};

const getters = {
    allFactions: (state) => state.factions,
    isLoading: (state) => state.loading,
    fetchError: (state) => state.error,
};

const actions = {
    async fetchFactions({ commit }) {
        commit('setLoading', true);
        try {
            const response = await factionService.getAll();
            commit('setFactions', response.data);
            commit('setLoading', false);
        } catch (error) {
            commit('setError', error.message);
            commit('setLoading', false);
        }
    },
};

const mutations = {
    setFactions: (state, factions) => (state.factions = factions),
    setLoading: (state, isLoading) => (state.loading = isLoading),
    setError: (state, error) => (state.error = error),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
