import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from '@/views/MainPage'
import FavoritesPage from '@/views/FavoritesPage'
import WatchPage from '@/views/WatchPage'

Vue.use(VueRouter);

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', component: MainPage },
        { name:"favorite",path: '/favorites/:userId', component: FavoritesPage },
        { path: '/watch', component: WatchPage }
    ]
});

export default router;
