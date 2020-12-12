<template>
  <div>
    <p>{{ count }}</p>

    <button @click="$listeners['update:count'](count + 1)">修改</button>
  </div>
</template>

<script>
export default {
  name: "Test",

  props: ["count"],
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>
