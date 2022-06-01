import Vue from "vue";
import { POSITION, TYPE } from "vue-toastification";

const state = {
  book: {
    id: 0,
    name: "",
    avatar: "",
    description: "",
    type: 0,
    author: "",
  },
  bookList: [],
  isLoading: false,
};

export const GETTER_TYPES = {
  GET_BOOK_BY_ID: "GET/BOOK_BY_ID",
  GET_BOOK_LIST: "GET/BOOK_LIST",
  GET_IS_LOADING: "GET/IS_LOADING",
};

const getters = {
  [GETTER_TYPES.GET_IS_LOADING](state) {
    return state.isLoading;
  },
  [GETTER_TYPES.GET_BOOK_LIST](state) {
    return state.bookList;
  },
  [GETTER_TYPES.GET_BOOK_BY_ID](state) {
    return state.book;
  },
};

export const MUTATION_TYPES = {
  GET_BOOK_LIST: "GET/BOOK_LIST",
  GET_BOOK_BY_ID: "GET/BOOK_BY_ID",
};

const mutations = {
  [MUTATION_TYPES.GET_BOOK_BY_ID](state, book) {
    state.book = book || {};
  },
  [MUTATION_TYPES.GET_BOOK_LIST](state, books) {
    state.bookList = books || [];
  },
};

export const ACTION_TYPES = {
  GET_BOOK_BY_ID: "@GET/BOOK_BY_ID",
  GET_BOOK_LIST: "@GET/BOOK_LIST",
  DELETE_BOOK: "@DELETE/BOOK",
  UPDATE_BOOK: "@UPDATE/BOOK",
};

const actions = {
  [ACTION_TYPES.GET_BOOK_BY_ID]({ commit }, uID) {
    setIsLoading(true);
    Vue.axios
      .get(`books/${uID}`)
      .then((response) => {
        setIsLoading(false);
        commit(MUTATION_TYPES.GET_BOOK_BY_ID, response.data);
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
  },
  [ACTION_TYPES.GET_BOOK_LIST]({ commit }) {
    setIsLoading(true);
    Vue.axios
      .get(`books`)
      .then((response) => {
        // Response from BE
        setIsLoading(false);
        commit(MUTATION_TYPES.GET_BOOK_LIST, response.data);
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
  },
  [ACTION_TYPES.DELETE_BOOK]({ commit }, uID) {
    setIsLoading(true);
    Vue.axios
      .delete(`books/${uID}`)
      .then((response) => {
        Vue.axios.get(`books`).then((response) => {
          commit(MUTATION_TYPES.GET_BOOK_LIST, response.data);
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
  [ACTION_TYPES.UPDATE_BOOK]({ commit }, uID) {
    setIsLoading(true);
    Vue.axios
      .put(`books/${uID}`, state.book)
      .then((response) => {
        // Response from BE
        Vue.$toast(`Update book ${state.book.name} success`, {
          type: TYPE.SUCCESS,
          position: POSITION.TOP_RIGHT,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        Vue.$toast(`API ${error.message}`, {
          type: TYPE.ERROR,
          position: POSITION.TOP_RIGHT,
        });
      });
  },
  [ACTION_TYPES.ADD_BOOK]({ commit }, newBook) {
    const formData = new FormData();
    Object.keys(newBook).forEach((k) => {
      if (k == "avatar" && newBook[k]) {
        const file = newBook[k];
        formData.append(k, newBook[k], file.name);
      } else {
        formData.append(k, newBook[k]);
      }
    });
    setIsLoading(true);
    Vue.axios
      .post(`books`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Response from BE
        Vue.$toast(`Add book success`, {
          type: TYPE.SUCCESS,
          position: POSITION.TOP_RIGHT,
        });
        setIsLoading(false);
      })
      .catch(({response}) => {
        const errMess = `${response.status} ${response.data.message || ""}`;
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
