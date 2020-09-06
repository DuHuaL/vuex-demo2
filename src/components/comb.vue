<template>
  <div>
    comb
    <br>
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  // 计算属性获取store中的数据，即原始写法的简化
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>

</style>
