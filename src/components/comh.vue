<template>
  <div>
    comh
    <br>
    <button @click="handleClick">comh</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    handleClick() {
      // 调用action
      // this.$store.dispatch({
      //   type: 'setCount',
      //   num: 10
      // })

      // 映射调用
      this.setCount({
        num: 8
      });
    },
    // 使用映射mapActions
    ...mapActions([
      'setCount'
    ])
  }
};
</script>

<style>

</style>
