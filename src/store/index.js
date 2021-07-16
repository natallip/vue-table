import { createStore } from 'vuex'
import config from '../config.json'

export default createStore({
  state: {
    records: [],
    columns: [],
    activePage: 1
  },
  mutations: {
    setRecords(state, items) {
      state.records = items
    },
    setColumns(state, items) {
      state.columns = items
    },
    setActivePage(state, page) {
      state.activePage = page
    }
  },
  actions: {
    loadRecords({ commit }) {
      fetch(`${config.URL}/items`)
        .then((response) => response.json())
        .then((result) => {
          commit('setRecords', result)
        })
    },
    loadColumns({ commit }) {
      fetch(`${config.URL}/columns`)
        .then((response) => response.json())
        .then((result) => {
          commit('setColumns', result)
        })
    }
  }
})
