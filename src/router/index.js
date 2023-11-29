import {createRouter, createWebHistory} from 'vue-router'
import Main from "../pages/Main.vue";
import Index from "../pages/vet/Index.vue";
import Edit from "../pages/vet/Edit.vue";
import Show from "../pages/vet/Show.vue";
import Create from "../pages/vet/Create.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            name: 'vet'
        },
        {
            path: '/vets',
            component: Index,
            name: 'vet.index'
        },
        {
            path: '/vets/edit/:id',
            component: Edit,
            name: 'vet.edit'
        },
        {
            path: '/vets/show/:id',
            component: Show,
            name: 'vet.show'
        },
        {
            path: '/vets/create',
            component: Create,
            name: 'vet.create'
        }
    ]
})

export default  router