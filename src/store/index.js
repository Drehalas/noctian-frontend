// src/store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

// Import modules
import armory from './modules/armory';
import faction from './modules/faction';
import game from './modules/game';
import skillBuff from './modules/skillBuff';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        armory,
        faction,
        game,
        skillBuff,
    },
});
