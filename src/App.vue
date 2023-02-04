<script setup lang="ts">
import StarRatings from './lib/StarRatings.vue'

function hello(e: any){
  console.log(e)
}
</script>

<template> 
  <StarRatings @star-change="hello" :stars-counts="7" class="custom-style" fill-color="#AED345" />
</template>

<style>
  .custom-style {
    /* color: red !important; */
    font-size: 5rem !important;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
