import { createStore } from 'vuex'
import axios from 'axios'
import { API_URL } from './api'
const store = createStore({
  state: {
    // Your state properties go here
    token: '',
    isAuthenticated: true
  },
  mutations: {
    // Your mutation functions go here
    setToken(state, token) {
      state.token = token
    },
    setSnackbar(state, { text, color }) {
      state.snackbar.text = text
      state.snackbar.color = color
      state.snackbar.showing = true
    }
  },
  actions: {
    // Your action functions go here
    async login({ commit }, { email, password }) {
      const response = await axios.post(`${API_URL}users`, {
        email,
        password
      })

      const token = response.data.token

      commit('setToken', token)
      console.log(response.data)
      commit()
    },
    showSnackbar({ commit }, { text, color }) {
      commit('setSnackbar', { text, color })
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
