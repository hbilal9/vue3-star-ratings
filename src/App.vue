<script setup lang="ts">
import Star from './components/Star.vue'

function hello(e){
  console.log(e)
}
</script>

<template> 
  <Star @star-change="hello" class="custom-style" fill-color="#AED345" />
</template>

<style>
  .custom-style {
    /* color: red !important; */
    font-size: 5rem !important;
  }
</style>
