<template>
  <div>
    come
    <br>
    <button @click="handleClick">按钮</button>
    {{ num }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  methods: {
    handleClick() {
      // this.$store.commit('increate');
      // this.$store.commit('increate', 3);
      // this.$store.commit('increate', {
      //   num: 3
      // });

      // 第二种调用
      // 当使用这种方法调用的时候，在store中的mutations中获取到的payload，是commit中传入的对象
      this.$store.commit({
        type: 'increate',
        num: 3
      });
    }
  },
  computed: {
    ...mapState({
      num: 'count'
    })
  }
};
</script>

<style>

</style>
