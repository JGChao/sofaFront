import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      host:'http://www.vicor-end.com',
      total:0,
  },
  mutations: {
      increment (state) {
          // 变更状态
          state.total++;
      },
      reduce(state){
          state.total--;
      },
      changeTotal(state,payload){
          state.total += payload.amount;
      },
      initTotal(state,payload){
          state.total = payload.total;
      }
  },
  actions: {
      increment(context,payload){
          context.commit('increment')
      },
      initTotal({commit},payload){
          commit('initTotal',payload);
      },
      changeTotal({commit},payload){
          commit('changeTotal',payload);
      }
  },
    //vue存储
    plugins: [createPersistedState({ storage: window.sessionStorage })],
})
