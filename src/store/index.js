import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    colorCode: "red",
  },
  getters: {
    conterSquared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    increaseCount(state, randomNumber) {
      state.counter += randomNumber
      
    },
    decreaseCount(state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    increaseCount( {commit}) {
      axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
      .then(response => {
    commit("increaseCount", response.data)
      })
   
    },
    decreaseCount({commit}) {
      axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
      .then(response => {
        commit("decreaseCount", response.data)
      })
    }, 
    setColorCode({commit}, newValue) {
      commit("setColorCode", newValue)
    }
  },
  modules: {
  }
})
