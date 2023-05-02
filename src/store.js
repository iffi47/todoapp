import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
  state: {
    // Your state properties go here
    token: null,
    isAuthenticated: false
  },
  mutations: {
    // Your mutation functions go here
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    // Your action functions go here
    async login({ commit }, { email, password }) {
      const response = await axios.post('/api/auth/login', { email, password })
      const token = response.data.token
      commit('setToken', token)
    }
  },
  getters: {
    // Your getter functions go here
    isAuthenticated(state) {
      return !!state.token
    }
  }
})
export default store
