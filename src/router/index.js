import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue'
import SurveyComponent from '@/components/SurveyComponent.vue'
import ListComponent from '@/components/ListComponent.vue'

const routes = [
    { path: '/', redirect: '/survey' },
    { path: '/home', component: HomeComponent },
    { path: '/survey', component: SurveyComponent },
    { path: '/list', component: ListComponent },
    { path: '/survey/:id', component:SurveyComponent, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
 
export default router;