<template>
  <div>
    comm
    <br>
    模块module的使用，简化写法
    <br>
    <button @click="handleClick">按钮</button>
    <br>
    数据展示
    <br>
    modulej中的数据
    <br>
    name: {{ username }} age: {{ age }}
    <br>
    modulek中的数据
    <br>
    name: {{ modulekname }} age: {{ modulekage }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  methods: {
    handleClick() {
      this.setname({
        name: '小明'
      });
      this.setage({
        age: 30
      });
    },
    ...mapActions('modulej', {
      setname: 'setName'
    }),
    ...mapActions('modulek', {
      setage: 'setAge'
    })
  },
  computed: {
    ...mapState('modulej', {
      username: 'name',
      age: 'age'
    }),
    ...mapState('modulek', {
      modulekname: 'name',
      modulekage: 'age'
    })
  }
};
</script>

<style>

</style>
