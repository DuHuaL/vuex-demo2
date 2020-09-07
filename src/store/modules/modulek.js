const modulek = {
  // 开启命名空间
  namespaced: true,
  state: {
    name: 'ls',
    age: 16
  },
  mutations: {
    setAge(state, payload) {
      state.age = payload.age;
    }
  },
  actions: {
    // 结构赋值的形式
    setAge({ commit }, payload) {
      commit({
        type: 'setAge',
        age: payload.age
      });
    }
  }
};
export default modulek;
