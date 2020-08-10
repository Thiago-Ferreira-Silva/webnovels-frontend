import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import UserPages from '../components/user/UserPages'
import Auth from '../components/auth/Auth'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},
{
    name: 'userPages',
    path: '/profile',
    component: UserPages
}, 
{
    name: 'auth',
    path: '/auth',
    component: Auth
}]

const router = new VueRouter ({
    mode: 'history',
    routes
})

export default router