import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/layout/Login'
import Main from '@/components/layout/Main'

import SettingsView from '@/components/views/UserSettings'
import ProfileView from '@/components/views/UserProfile'

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
            path: '/',
            component: Main,
            children: [
                {
                    path: '/settings',
                    component: SettingsView,
                    meta: { title: 'Настройки' }
                },
                {
                    path: '/profile',
                    component: ProfileView,
                    meta: { title: 'Профиль' }
                }
            ]
        }
    ]
})
