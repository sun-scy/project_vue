import vue from 'vue'
import  vuex from 'vuex'
import  state from './state'
import  mutations from './mutations'
import  getters from './getters'
import  actions from './actions'
vue.use(vuex)

export default new vuex.Store({
    state,
    getters,
    actions,
    mutations
})