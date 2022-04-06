import userListTmp from '../../mock/user'
const state = {
  user: {
    id: 0,
    username: '',
    name: '',
    age: 0,
    address: '',
  },
  userList: []
}

const getters = {
  getUserByID(state) {
    return state.user
  },
  userList(state) {
    return state.userList
  },
}

export const MUTATION_TYPES = {
    GET_USER_BY_ID: 'GET/USER_BY_ID',
    GET_USER_LIST: 'GET/USER_LIST',
}

const mutations = {
    [MUTATION_TYPES.GET_USER_BY_ID] (state, { uID }) {
        state.user = state.userList.find(u => Number(u.id) === Number(uID))
    },

    [MUTATION_TYPES.GET_USER_LIST] (state, users) {
      state.userList = users || []
    },
}

export const ACTION_TYPES = {
  GET_USER_BY_ID: '@GET/USER_BY_ID',
  GET_USER_LIST: '@GET/USER_LIST'
}

const actions = {
  [ACTION_TYPES.GET_USER_BY_ID] ({ commit }, uID) {
    commit(MUTATION_TYPES.GET_USER_BY_ID, { uID })
  },

  [ACTION_TYPES.GET_USER_LIST] ({ commit }, users) {
    commit(MUTATION_TYPES.GET_USER_LIST, users.data)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}