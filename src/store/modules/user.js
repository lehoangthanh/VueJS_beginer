import Vue from 'vue'
import { POSITION, TYPE } from "vue-toastification"

const state = {
  user: {
    id: 0,
    email: '',
    name: '',
    age: 0,
    address: '',
    avatar: '',
    password: '',
    gender: '',
  },
  userList: [],
  isLoading: false,
}

export const GETTER_TYPES = {
  GET_USER_BY_ID: 'GET/USER_BY_ID',
  GET_USER_LIST: 'GET/USER_LIST',
  GET_IS_LOADING: 'GET/IS_LOADING',
}
const getters = {
  [GETTER_TYPES.GET_USER_BY_ID](state) {
    return state.user
  },

  [GETTER_TYPES.GET_USER_LIST](state) {
    return state.userList
  },
  [GETTER_TYPES.GET_IS_LOADING](state) {
    return state.isLoading
  }
}

export const MUTATION_TYPES = {
  GET_USER_BY_ID: 'GET/USER_BY_ID',
  GET_USER_LIST: 'GET/USER_LIST',
}

const mutations = {
  [MUTATION_TYPES.GET_USER_BY_ID](state, user) {
    state.user = user
  },

  [MUTATION_TYPES.GET_USER_LIST](state, users) {
    state.userList = users || []
  },
}

export const ACTION_TYPES = {
  GET_USER_BY_ID: '@GET/USER_BY_ID',
  GET_USER_LIST: '@GET/USER_LIST',
  UPDATE_USER_PROFILE: '@PUT/UPDATE_USER_PROFILE',
}

const actions = {
  [ACTION_TYPES.GET_USER_BY_ID]({ commit }, uID) {
    setIsLoading(true)
    Vue.axios.get(`users/${uID}`).then(response => {
      // Response from BE
      setIsLoading(false)
      commit(MUTATION_TYPES.GET_USER_BY_ID, response.data)
    }).catch(error => {
      throw new Error(`API ${error}`);
    })
  },

  [ACTION_TYPES.GET_USER_LIST]({ commit }) {
    setIsLoading(true)
    Vue.axios.get(`users`).then(response => {
      // Response from BE
      setIsLoading(false)
      commit(MUTATION_TYPES.GET_USER_LIST, response.data)
    }).catch(error => {
      throw new Error(`API ${error}`);
    })
  },

  [ACTION_TYPES.UPDATE_USER_PROFILE]({ commit }) {
    setIsLoading(true)
    Vue.axios.put(`users/${state.user.id}`, state.user).then(response => {
      // Response from BE
      Vue.$toast(`Update user ${state.user.name} success`, {
        timeout: 2000,
        type: TYPE.INFO,
        position: POSITION.TOP_CENTER,
      });
      setIsLoading(false)
      // commit(MUTATION_TYPES.GET_USER_LIST, response.data)
    }).catch(error => {
      setIsLoading(false)
      Vue.$toast(`API ${error.message}`, {
        timeout: 2000,
        type: TYPE.ERROR,
        position: POSITION.TOP_CENTER,
      });
    })
  },
}

const setIsLoading = (status) => {
  state.isLoading = status;
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
