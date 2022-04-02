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

const userListTmp = [
  {
		id: 1,
		name: 'ABc',
    username: 'abc',
		age: 22,
		address: 'Bạc liêu'
	},
	{
		id: 2,
		name: 'Khoa',
    username: 'khoa',
		age: 16,
		address: 'Cà mau'
	},
	{
		id: 3,
		name: 'Vũ',
    username: 'vu',
		age: 30,
		address: 'Sóc trăng'
	},
	{
		id: 4,
		name: 'Sơn',
    username: 'son',
		age: 17,
		address: 'Cần thơ'
	}
]

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

    [MUTATION_TYPES.GET_USER_LIST] (state) {
      state.userList = userListTmp
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

  [ACTION_TYPES.GET_USER_LIST] ({ commit }) {
    commit(MUTATION_TYPES.GET_USER_LIST)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}