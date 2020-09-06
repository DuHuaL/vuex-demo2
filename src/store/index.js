import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
    msg: 'hello Vuex'
  },

  // getters就是vuex中的计算属性
  getters: {
    reverseMsg(state) {
      return state.msg.split('').reverse().join('');
    }
  },
  mutations: {
    increate(state) {
      state.count++;
    }
  }
});
export default store;
