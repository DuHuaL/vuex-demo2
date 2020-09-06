<template>
  <div>
    comd
    <br>
    <!-- 原始用法 -->
    <!-- {{ $store.getters.reverseMsg }} -->
    <!-- 第二种用法 -->
    <!-- {{ rMsg }} -->
    <!-- 第三种 -->
    <!-- {{ reverseMsg }} -->
    <!-- 完善写法 -->
    {{ rMsg }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  // 2、第二种用法
  // 在组件的计算属性中用
  // computed: {
  //   rMsg() {
  //     return this.$store.getters.reverseMsg;
  //   }
  // }
  // 3、第三种用法
  // 如果store中的gettres中有多个方法，使用上面组件中的计算属性，就比较麻烦
  // 此时使用映射mapGetters
  computed: {
    // 1）、
    // 如果组件中的计算属性也有自己的reverseMsg方法，此时使用下面的方式就会冲突
    // ...mapGetters([
    //   'reverseMsg'
    // ])

    // 2）、
    // 为了解决重名的问题，则则推荐以下写法
    ...mapGetters({
      rMsg: 'reverseMsg'
    })

  }
};
</script>

<style>

</style>
