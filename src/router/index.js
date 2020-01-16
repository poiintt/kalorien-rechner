import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
import Overview from '@/components/Overview'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/mainpage',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/overview',
            name: 'Overview',
            component: Overview
        }
    ]
})