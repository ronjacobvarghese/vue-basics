<template>
  <h1> Ninja Reaction Timer</h1>
  <button :disabled = "isPlaying" @click = "start"> Play</button>
  <Block v-if = "isPlaying" :delay = "delay" @end ="endGame"/>
  <Results v-if = "showResults" :score = "score"/>
</template>

<script>

import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  data() {
    return {
      isPlaying:false,
      delay:0,
      score: null,
      showResults: false,
    }
  },
  components: { Block, Results },
  methods: {
    start(){
      this.showResults =false;
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
    },
    endGame (reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
