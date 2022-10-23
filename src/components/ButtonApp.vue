<template>
   <div class="buttons">
      <button class="blue" @click="$store.dispatch('increaseCount')">+</button>
      <button class="green" @click="$store.dispatch('decreaseCount')">-</button>
    </div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
.blue{
background: blue ;
color: black;
border: none;
}
.green{
background: green;
color: black;
border: none;
}
</style>
