// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import Loading from '../pages/Loading.vue';
import Intro from '../pages/Intro.vue';
import FactionSelection from '../pages/FactionSelection.vue';
import Attack from '../pages/Attack.vue';
import Hero from '../pages/Hero.vue';
import Ladder from '../pages/Ladder.vue';
import War from '../pages/War.vue';
import Treasure from '../pages/Treasure.vue';
import Soldier from '../pages/Soldier.vue';
import Armory from '../pages/Armory.vue';
import Spell from '../pages/Spell.vue';
import Artifact from '../pages/Artifact.vue';
import AddFriend from '../pages/AddFriend.vue';
import NotFound from '../pages/NotFound.vue';  // Ensure NotFound component is correctly set up

const routes = [
    {
        path: '/',
        name: 'Attack',
        component: Attack,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/loading',
        name: 'Loading',
        component: Loading,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/intro',
        name: 'Intro',
        component: Intro,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/faction-selection',
        name: 'FactionSelection',
        component: FactionSelection,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/hero',
        name: 'Base',
        component: Hero,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/ladder',
        name: 'Ladder',
        component: Ladder,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/war',
        name: 'War',
        component: War,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/treasure',
        name: 'Treasure',
        component: Treasure,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/soldier',
        name: 'Soldier',
        component: Soldier,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/armory',
        name: 'Armory',
        component: Armory,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/spell',
        name: 'Spell',
        component: Spell,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/artifact',
        name: 'Artifact',
        component: Artifact,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/add-friend',
        name: 'AddFriend',
        component: AddFriend,
        meta: { layout: 'DefaultLayout' }
    },
    {
        path: '/:catchAll(.*)', // Fallback route
        name: 'NotFound',
        component: NotFound,
        meta: { layout: 'DefaultLayout' }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;