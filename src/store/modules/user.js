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
  getUserProfile(state) {
console.log('=====getUserProfile', state.user)
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
    [MUTATION_TYPES.GET_USER_BY_ID] (state, user) {
      console.log('=====MUTATION_TYPES', user)
        state.user = user
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
  [ACTION_TYPES.GET_USER_BY_ID] ({ commit }, userRequest) {
    console.log('=====userRequest', userRequest)
    commit(MUTATION_TYPES.GET_USER_BY_ID, userRequest.data)
  },

  [ACTION_TYPES.GET_USER_LIST] ({ commit }, usersRequest) {
    commit(MUTATION_TYPES.GET_USER_LIST, usersRequest.data)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}