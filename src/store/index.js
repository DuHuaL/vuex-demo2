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
    // increate(state) {
    //   state.count++;
    // }
    // increate(state, payload) {
    //   state.count += payload;
    // }
    increate(state, payload) {
      state.count += payload.num;
    }
  },
  actions: {
    // context是上下文，包括state，getters，mutations,,dispatch()方法是调用自己
    setCount(context, payload) {
      // console.log(context);
      context.commit({
        type: 'increate',
        num: payload.num
      });
    }
  }
});
export default store;
