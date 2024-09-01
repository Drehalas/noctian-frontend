import { createStore } from 'vuex';  // Import createStore from vuex

// Import modules
import armory from './modules/armory';
import faction from './modules/faction';
import game from './modules/game';
import skillBuff from './modules/skillBuff';

// Create the store instance using createStore
const store = createStore({
    modules: {
        armory,
        faction,
        game,
        skillBuff,
    },
});

export default store;  // Export the store instance