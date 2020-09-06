<template>
  <div>
    comf
    <br>
    <button @click="handleAdd">按钮</button>
    <br>
    {{ num1 }}
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      num1: 'count'
    })
  },
  methods: {
    // 第一中写法，可以传一个数组
    // // 可以传数组
    // ...mapMutations([
    //   'increate'
    // ]),
    // // 组件中的方法
    // handleAdd() {
    //   // 在组件中使用mutations
    //   this.increate({
    //     num: 5
    //   });
    // }

    // 第二种写法，可以传一个对象，给store中的increate方法，改个名字，然后再在组件中使用
    ...mapMutations({
      add: 'increate'
    }),
    handleAdd() {
      this.add({
        num: 10
      });
    }
  }
};
</script>

<style>

</style>
