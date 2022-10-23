<template>
   <div class="squared-counter">
      {{$store.state.counter}}
      <sup>2</sup> = 
      {{$store.getters.conterSquared}}
    </div>
 
</template>

<script>
export default {

}
</script>

<style>

</style>