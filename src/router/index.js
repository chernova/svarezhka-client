import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/components/UserSettings'
import Profile from '@/components/UserProfile'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/settings',
            component: Settings,
            meta: {title: 'Настройки'}
        },
        {
            path: '/profile',
            component: Profile,
            meta: {title: 'Профиль'}
        }
    ]
})
