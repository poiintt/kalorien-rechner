import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import MainPage from '@/components/MainPage'
import Overview from '@/components/Overview'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: 'Home',
            component: Home
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