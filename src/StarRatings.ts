import type { App } from "vue";
import { StarRatings } from "./lib";

export default {
    install: (app: App) => {
        app.component('StarRatings', StarRatings);
    }
}

export { StarRatings };