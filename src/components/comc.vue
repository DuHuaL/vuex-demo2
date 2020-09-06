<template>
  <div>
    comc
    <br>
    <!-- 第一种 -->
    <!-- {{count}} -->
    <!-- 第二种 -->
    {{ num }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  // 计算属性-简化视图中的数据绑定，但是如果要绑定多个状态的话，要提供多个计算属性，比较麻烦
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // }

  // 解决上述问题，vuex 提供了 mapState的函数，自动生成计算属性
  // 1、
  // computed: mapState([
  //   'count'
  // ])

  // 2、如果组件中的data中有count，这个属性，使用1中的方法就会产生冲突
  // 使用对象的形式
  // 属性 -- 是要映射到当前组件中的属性的名称 num
  // 值 -- 是vuex的仓库中管理的数据 this.$store.state.count;
  // computed: mapState({
  //   num: 'count'
  // })

  // 3、由于组件本身也有计算属性，用以上写法，则组件本身的计算属性就没法写
  // 所以改造成以下方法
  computed: {
    // 组件本身的计算属性
    // test() {},
    // 映射的store中的数据
    ...mapState({
      num: 'count'
    })
  }
};
</script>

<style>

</style>
