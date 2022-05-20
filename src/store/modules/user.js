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
};

export const GETTER_TYPES = {
  GET_USER_BY_ID: "GET/USER_BY_ID",
  GET_USER_LIST: "GET/USER_LIST",
  GET_IS_LOADING: "GET/IS_LOADING",
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
};

export const MUTATION_TYPES = {
  GET_USER_BY_ID: "GET/USER_BY_ID",
  GET_USER_LIST: "GET/USER_LIST",
};

const mutations = {
  [MUTATION_TYPES.GET_USER_BY_ID](state, user) {
    state.user = user;
  },

  [MUTATION_TYPES.GET_USER_LIST](state, users) {
    state.userList = users || [];
  },
};

export const ACTION_TYPES = {
  GET_USER_BY_ID: "@GET/USER_BY_ID",
  GET_USER_LIST: "@GET/USER_LIST",
  UPDATE_USER_PROFILE: "@PUT/UPDATE_USER_PROFILE",
  DELETE_USER: "@DELETE/DELETE_USER",
};

const actions = {
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

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
