import Vue from "vue";
import { POSITION, TYPE } from "vue-toastification";

const state = {
  user: {
    id: 0,
    email: "",
    name: "",
    age: 0,
    address: "",
    avatar: "",
    password: "",
    gender: "",
  },
  userList: [],
  isLoading: false,
  userAuth: {},
};

export const GETTER_TYPES = {
  GET_USER_BY_ID: "GET/USER_BY_ID",
  GET_USER_LIST: "GET/USER_LIST",
  GET_IS_LOADING: "GET/IS_LOADING",
  GET_USER_AUTH: "GET/USER_AUTH",
};
const getters = {
  [GETTER_TYPES.GET_USER_BY_ID](state) {
    return state.user;
  },

  [GETTER_TYPES.GET_USER_LIST](state) {
    return state.userList;
  },

  [GETTER_TYPES.GET_IS_LOADING](state) {
    return state.isLoading;
  },

  [GETTER_TYPES.GET_USER_AUTH](state) {
    console.log('====state', state)
    return state.userAuth;
  },
};

export const MUTATION_TYPES = {
  GET_USER_BY_ID: "GET/USER_BY_ID",
  GET_USER_LIST: "GET/USER_LIST",
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",
};

const mutations = {
  [MUTATION_TYPES.GET_USER_BY_ID](state, user) {
    state.user = user;
  },

  [MUTATION_TYPES.GET_USER_LIST](state, users) {
    state.userList = users || [];
  },

  [MUTATION_TYPES.USER_LOGIN](state, userAuth) {
    state.userAuth = userAuth || {};
  },

  [MUTATION_TYPES.USER_LOGOUT](state) {
    state.userLisuserAutht = [];
  },
};

export const ACTION_TYPES = {
  GET_USER_BY_ID: "@GET/USER_BY_ID",
  GET_USER_LIST: "@GET/USER_LIST",
  UPDATE_USER_PROFILE: "@PUT/UPDATE_USER_PROFILE",
  DELETE_USER: "@DELETE/DELETE_USER",
  POST_USER_LOGIN: "@POST/USER_LOGIN",
  POST_USER_LOGOUT: "@POST/USER_LOGOUT",
};

const actions = {
  [ACTION_TYPES.POST_USER_LOGIN]({ commit }, { username, password }) {
    Vue.axios
    .get(`users/${username}`)
    .then((response) => {
      // Response from BE
      setIsLoading(false);
      if(password !== "Abc123") {
        throw new Error('Worng email or password!!!')
      }
      response.data.token = makeid(16)
      localStorage.setItem('userAuth', JSON.stringify(response.data));
      commit(MUTATION_TYPES.USER_LOGIN, response.data);
    })
    .catch((error) => {
      setIsLoading(false);
      Vue.$toast(`API ${error}`, {
        type: TYPE.ERROR,
        position: POSITION.TOP_RIGHT,
      });
    });
  },

  [ACTION_TYPES.POST_USER_LOGOUT]({ commit }, uID) {
    Vue.axios
    .get(`users/${uID}`)
    .then((response) => {
      // Response from BE
      setIsLoading(false);
      localStorage.removeItem('userAuth');
      commit(MUTATION_TYPES.USER_LOGOUT);
    })
    .catch((error) => {
      setIsLoading(false);
        Vue.$toast(`API ${error}`, {
          type: TYPE.ERROR,
          position: POSITION.TOP_RIGHT,
        });
    });
  },

  [ACTION_TYPES.GET_USER_BY_ID]({ commit }, uID) {
    setIsLoading(true);
    Vue.axios
      .get(`users/${uID}`)
      .then((response) => {
        // Response from BE
        setIsLoading(false);
        commit(MUTATION_TYPES.GET_USER_BY_ID, response.data);
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
  },

  [ACTION_TYPES.GET_USER_LIST]({ commit }) {
    setIsLoading(true);
    Vue.axios
      .get(`users`)
      .then((response) => {
        // Response from BE
        setIsLoading(false);
        commit(MUTATION_TYPES.GET_USER_LIST, response.data);
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
  },

  [ACTION_TYPES.UPDATE_USER_PROFILE]({ commit }, uID) {
    setIsLoading(true);
    Vue.axios
      .put(`users/${uID}`, state.user)
      .then((response) => {
        // Response from BE
        Vue.$toast(
          `Update user ${state.user.firstName} ${state.user.lastName} success`,
          {
            type: TYPE.SUCCESS,
            position: POSITION.TOP_RIGHT,
          }
        );
        setIsLoading(false);
        // commit(MUTATION_TYPES.GET_USER_LIST, response.data)
      })
      .catch((error) => {
        setIsLoading(false);
        Vue.$toast(`API ${error.message}`, {
          type: TYPE.SUCCESS,
          position: POSITION.TOP_RIGHT,
        });
      });
  },
  [ACTION_TYPES.DELETE_USER]({ commit }, uID) {
    setIsLoading(true);
    Vue.axios
      .delete(`users/${uID}`)
      .then((reponse) => {
        Vue.axios.get(`users`).then((response) => {
          commit(MUTATION_TYPES.GET_USER_LIST, response.data);
          Vue.$toast(`Delete user with ID: ${uID} success`, {
            type: TYPE.SUCCESS,
            position: POSITION.TOP_RIGHT,
          });
          setIsLoading(false);
        });
      })
      .catch((error) => {
        setIsLoading(false);
        Vue.$toast(`API ${error}`, {
          type: TYPE.ERROR,
          position: POSITION.TOP_RIGHT,
        });
      });
  },
  [ACTION_TYPES.ADD_USER]({ commit }, newUser) {
    const formData = new FormData();
    Object.keys(newUser).forEach((k) => {
      if (k == "avatar" && newUser[k]) {
        const file = newUser[k];
        formData.append(k, newUser[k], file.name);
      } else {
        formData.append(k, newUser[k]);
      }
    });

    setIsLoading(true);
    Vue.axios
      .post(`users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((reponse) => {
        Vue.$toast(`Add user success`, {
          type: TYPE.SUCCESS,
          position: POSITION.TOP_RIGHT,
        });
        setIsLoading(false);
      })
      .catch(({response}) => {
        const errMess = `${response.status} ${response.data.message || ''}`
        setIsLoading(false);
        Vue.$toast(`API ${errMess}`, {
          type: TYPE.ERROR,
          position: POSITION.TOP_RIGHT,
        });
      });
  },
};

const setIsLoading = (status) => {
  state.isLoading = status;
};

const makeid = (length) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
