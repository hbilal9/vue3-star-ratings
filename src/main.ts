import { createApp } from 'vue';
import App from './App.vue'

import StarRatings from './StarRatings';

const app = createApp(App)
app.use(StarRatings);
app.mount('#app')
