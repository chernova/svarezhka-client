import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
        errors: []
    },
    getters: {
        errors(state) {
            return state.errors
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        addError(state, payload) {
            state.errors.push(payload)
        },
        clearErrors(state) {
            state.errors = []
        }
    },
    actions: {
        login({ commit }, payload) {
            commit('clearErrors')
            if (payload.email === 'ethan-mars@hotmail.com' && payload.password === 'universal') {
                const newUser = {
                    uid: Math.random().toString(36).substring(7),
                    email: payload.email
                }
                commit('setUser', newUser)
            } else {
                commit('addError', 'Такой пользователь не найден.')
            }
        },
        logout({ commit }) {
            commit('setUser', null)
        }
    }
})
