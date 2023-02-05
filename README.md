# Vue Star Ratings

Vue 3 simple and customizable component for star ratings


## Features

- Simple to use
- HTML Encode Characher Stars without quality loss
- customize color, size, font-family, and counts of stars

## Screenshots
![App Screenshot](https://i.postimg.cc/2jHNqZWJ/vue-star-ratings.gif)

## Installation

Install Vue Stars Ratings with npm

```bash
  npm i @hbilal_9/vue3-star-ratings
```
    
## Setup

Import Images Dragger in main.ts

```bash
  import StarRatings from '@hbilal_9/vue3-star-ratings'
  import '@hbilal_9/vue3-star-ratings/dist/style.css'
  app.use(StarRatings)
```

Use as component

```bash
  import StarRatings from '@hbilal_9/vue3-star-ratings'
  import '@hbilal_9/vue3-star-ratings/dist/style.css'
```
In template

```
  <star-ratings :starsCounts="7" v-model="ratings"></star-ratings>
```
you can also pass change event
```
  <star-ratings @star-change="getRatings"></star-ratings>
```
in script

```
function getRatings(e){
    console.log(e)
}
```

##  Usage
```bash
<script setup lang="ts">
  import { ref } from 'vue';
  const ratings = ref(0)

</script>

<template>
    <star-ratings v-model="ratings"></star-ratings>

    You added {{ ratings }} stars ratings.
</template>

```

## Custom Style

You can pass a custom class as a props to design the component according to your needs

```
<star-ratings v-model="ratings" custom-class />
```

css 

```
.custom-style {
    color: red !important;
    font-size: 5rem !important;
    font-family: 'system-ui', 'Courier New', Courier, monospace;
}
```
## Props

| Prop          | Description                                                                                       | Type             | Default |
| ------------- | ------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| starsCounts      | Stars counts                                | Number | 5      |
| fillColor     | This is the color of the stars when active or hover                                                        | String           | #ED8A19 |
| size     | star size in accept px and rem                                                        | String           | 3rem |
| fontFamily     | This is the font family of the stars,this will auto select accounding to your system's fontFamily                                                  | String           | 'system-ui' |

 

## Support Me
support me to publish more packages like this for free.

[![Coffee](https://img.shields.io/badge/Coffee-Buy%20me%20a%20coffee-yellow)](https://www.buymeacoffee.com/hbilal)