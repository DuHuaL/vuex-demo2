<template>
  <div>
    comg
    <br>
    <button @click="handleClick">按钮comg</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$store.dispatch('setCount');
    }
  }
};
</script>

<style>

</style>
