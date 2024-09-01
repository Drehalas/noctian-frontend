// src/store/modules/armory.js

import armoryService from '../../services/armoryService';

const state = {
    armoryItems: [],
    loading: false,
    error: null,
};

const getters = {
    allArmoryItems: (state) => state.armoryItems,
    isLoading: (state) => state.loading,
    fetchError: (state) => state.error,
};

const actions = {
    async fetchArmoryItems({ commit }) {
        commit('setLoading', true);
        try {
            const response = await armoryService.getAll();
            commit('setArmoryItems', response.data);
            commit('setLoading', false);
        } catch (error) {
            commit('setError', error.message);
            commit('setLoading', false);
        }
    },
};

const mutations = {
    setArmoryItems: (state, items) => (state.armoryItems = items),
    setLoading: (state, isLoading) => (state.loading = isLoading),
    setError: (state, error) => (state.error = error),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
