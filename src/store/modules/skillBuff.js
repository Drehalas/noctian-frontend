// src/store/modules/skillBuff.js

import skillBuffService from '../../services/skillBuffService';

const state = {
    skills: [],
    loading: false,
    error: null,
};

const getters = {
    allSkills: (state) => state.skills,
    isLoading: (state) => state.loading,
    fetchError: (state) => state.error,
};

const actions = {
    async fetchSkills({ commit }) {
        commit('setLoading', true);
        try {
            const response = await skillBuffService.getAll();
            commit('setSkills', response.data);
            commit('setLoading', false);
        } catch (error) {
            commit('setError', error.message);
            commit('setLoading', false);
        }
    },
};

const mutations = {
    setSkills: (state, skills) => (state.skills = skills),
    setLoading: (state, isLoading) => (state.loading = isLoading),
    setError: (state, error) => (state.error = error),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
