const modulej = {
  state: {
    name: 'zs',
    age: 18
  },
  mutations: {
    setName(state, payload) {
      state.name = payload.name;
    }
  },
  actions: {
    setName(context, payload) {
      context.commit({
        type: 'setName',
        name: payload.name
      });
    }
  }
};

export default modulej;
