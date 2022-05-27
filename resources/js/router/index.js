import { createRouter, createWebHistory } from "vue-router";
import productIndex from '../components/products/index.vue';
import productNew from '../components/products/new.vue';
import productEdit from '../components/products/edit.vue';
import testPage from '../components/testpage.vue';
import notFound from '../components/notFound.vue';
const routes = [
    {
        path: '/',
        component: productIndex
    },
    {
        path: '/product/new',
        component: productNew
    },
    {
        path: '/product/edit/:id',
        component: productEdit,
        props:true
    },
    {
        path: '/testpage',
        component: testPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router