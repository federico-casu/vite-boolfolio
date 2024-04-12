import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue'
import SingleProject from './pages/SingleProject.vue'
import NotFound from './pages/NotFound.vue'
import ContactMe from './pages/ContactMe.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: ProjectList
        },
        {
            path: '/portfolio/:repo_name',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/contact-me',
            name: 'contact-me',
            component: ContactMe
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export {router};