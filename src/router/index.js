import { createRouter, createWebHistory } from 'vue-router'
import IngresoAlumnos from '../components/IngresoAlumnos.vue'
import ListadoAlumnos from '../components/ListadoAlumnos.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: IngresoAlumnos,
        },
        {
            path: '/listado',
            name: 'listado',
            component: ListadoAlumnos,
        },
    ],
})

export default router