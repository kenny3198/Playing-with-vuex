<template>
   <input v-model="colorCode" type="text" placeholder="Enter colour code">

</template>

<script>
export default {
   computed: {
  colorCode: {
    get() {
      return this.$store.state.colorCode
    },
    set(newValue) {
      return this.$store.dispatch("setColorCode", newValue)
    }
  }
  },
  
}
</script>

<style>

</style>