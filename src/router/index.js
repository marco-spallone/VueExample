import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AlbumsView from "@/views/AlbumsView.vue";

const routes = [
    {
        path:'/home',
        name:'home',
        component:HomeView
    },
    {
        path:'/albums/:id',
        name:'albums',
        component:AlbumsView
    }
];

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

export default router;