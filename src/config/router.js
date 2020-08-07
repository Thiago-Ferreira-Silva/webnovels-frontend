import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import UserPages from '../components/user/UserPages'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},
{
    name: 'userPages',
    path: '/admin',
    component: UserPages
}]

const router = new VueRouter ({
    mode: 'history',
    routes
})

export default router