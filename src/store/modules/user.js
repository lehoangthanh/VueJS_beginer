const state = {
  user: {
    id: 0,
    username: '',
    fullname: '',
    age: 0,
    address: '',
  },
  userList: []
}

const userListTmp = [
  {
		id: 1,
		name: 'Quý',
    username: 'quy',
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
  user(state) {
    return state.user
  },
  userList(state) {
    return state.userList
  },
}

export const MUTATION_TYPES = {
    SET_USER: 'SET/USER',
    GET_USER_LIST: 'GET/USER_LIST',
}

const mutations = {
    [MUTATION_TYPES.SET_USER] (state, { user }) {
        state.user = user
    },

    [MUTATION_TYPES.GET_USER_LIST] (state) {
      console.log('==userListTmp===')
      state.userList = userListTmp
    },
}

export const ACTION_TYPES = {
  SET_USER: '@SET/USER',
  GET_USER_LIST: '@GET/USER_LIST'
}

const actions = {
  [ACTION_TYPES.SET_USER] ({ commit }, user) {
    commit(MUTATION_TYPES.SET_USER, { user })
  },

  [ACTION_TYPES.GET_USER_LIST] ({ commit }) {
    console.log('=ACTION_TYPES=userListTmp===')
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