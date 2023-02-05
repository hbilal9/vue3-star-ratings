<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  modelValue: String,
  starsCounts: { type: Number, default: 5 },
  customClass: String,
  size: String,
  fillColor: {type: String, default: '#ED8A19'},
  fontFamily: {type: String, default: 'system-ui'},
});

const emit = defineEmits(['starChange', 'update:modelValue']);

function hover(index: number) {
  const star = ref(null)
  let counts = index + 1;
  const el = document.querySelectorAll('.star');
  el.forEach((elm, i) => {
    if (i < counts) {
      elm.innerHTML = '&#9733;';
    }else{
      elm.innerHTML = '&#9734;';
    }
  })
}
let selectedStart = ref(-1);
function mouseClick(index: number) {
  const star = ref(null)
  let counts = index + 1;
  const el = document.querySelectorAll('.star');
  selectedStart.value = index;
  el.forEach((elm, i) => {
    if (i < counts) {
      elm.innerHTML = '&#9733;';
      emit('starChange', counts);
      emit('update:modelValue', counts)
    }else{
      elm.innerHTML = '&#9734;';
    }
  })
}

function mouseout(index: number){
  const el = document.querySelectorAll('.star');
  el.forEach((elm, i) => {
    if (i <= selectedStart.value) {
      elm.innerHTML = '&#9733;';
    }else{
      elm.innerHTML = '&#9734;';
    }
  })
}

</script>

<template>
   <ul class="stars" ref="stars">
    <li
        v-for="(star, i) in starsCounts"
        :key="i"
        class="star"
        :id="`star-`+i"
        @mouseover="hover(i)"
        @mouseout="mouseout(i)"
        @click="mouseClick(i)"
        :style="{fontSize: size, color: fillColor, fontFamily: fontFamily}"
        v-bind="$attrs"
    >
      &#9734;
    </li>
   </ul>
   
</template>

<style scoped>
@font-face {
  font-family: 'Shooting Star';
  src: url('../assets/ShootingStar-Bold.otf');
}
.stars {
  display: flex;
}
.star {
  list-style: none;
  padding-left: 1rem;
  font-size: 3rem;
  cursor: pointer;
  /* font-family: system-ui; */
}
.star:first-child{
  padding: 0;
}

</style>
