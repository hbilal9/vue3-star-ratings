<script setup lang="ts">
// import StarRatings from './lib/StarRatings.vue'
import {ref} from 'vue';

const stars = ref(0);

function hello(e: any){
  console.log(e)
}
</script>

<template> 
  <star-ratings v-model="stars" @star-change="hello" :stars-counts="7" class="custom-style" fill-color="#AED345" />

  {{ stars }}
</template>

<style>
  .custom-style {
    color: red !important;
    font-size: 5rem !important;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
