<script setup lang="ts">
// import StarRatings from './lib/StarRatings.vue'
import {ref} from 'vue';

const stars1 = ref(0);
const stars2 = ref(0);
const stars3 = ref(0);

function hello(e: any){
  console.log(e)
}
</script>

<template> 
  <star-ratings v-model="stars1" @star-change="hello" :stars-counts="7" class="custom-style" fill-color="#AED345" />
  <star-ratings v-model="stars2" @star-change="hello" :stars-counts="3" class="custom-style" fill-color="#AED345" />
  <star-ratings v-model="stars3" @star-change="hello" :stars-counts="5" class="custom-style" fill-color="#AED345" />
  <div>
    You gives first {{ stars1 }} ratings. <br> <br>
    You gives 2nd {{ stars2 }} ratings. <br> <br>
    You gives 3rd {{ stars3 }} ratings.
  </div>
  <!-- {{ stars }} -->
</template>

<style>
  .custom-style {
    /* color: red !important; */
    font-size: 5rem !important;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
