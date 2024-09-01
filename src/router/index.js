// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import Home from '../pages/Home.vue';
import Faction from '../pages/Faction.vue';
import Game from '../pages/Game.vue';
import SkillBuff from '../pages/SkillBuff.vue';
import Equipment from '../pages/Equipment.vue';
import NotFound from '../pages/NotFound.vue';  // Import the NotFound component

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: 'DefaultLayout' }  // Optionally specify the layout to use
    },
    {
        path: '/faction',
        name: 'Faction',
        component: Faction,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/skill-buff',
        name: 'SkillBuff',
        component: SkillBuff,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/equipment',
        name: 'Equipment',
        component: Equipment,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/:catchAll(.*)',  // Catch-all route for 404 page
        name: 'NotFound',
        component: NotFound,
        meta: { layout: 'DefaultLayout' }
    }
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
