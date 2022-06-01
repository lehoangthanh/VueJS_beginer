import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import book from './modules/book'

Vue.use(Vuex)

export const modules = {
    user,
    book
}

export default new Vuex.Store ({
    modules,
})
