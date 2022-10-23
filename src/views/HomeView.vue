<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <CounterApp/>
  <CounterSquared/>
  <ButtonApp/>
  <ColorCode/>
         </div>
</template>

<script>
// @ is an alias to /src
import CounterApp from '@/components/CounterApp'
import CounterSquared from '@/components/CounterSquared'
import ButtonApp from '@/components/ButtonApp'
import ColorCode from '@/components/ColorCode'

export default {
  name: 'HomeView',
  components: {
    CounterApp,
    CounterSquared,
    ButtonApp,
    ColorCode
  },
 
  
}
</script>
<style >
div{
  margin-bottom: 10px;
}
.counter{
  font-size: 80px;
}
.buttons button {
  width: 100px;
  font-size: 40px;
  margin: 10px;
  
}
</style>
