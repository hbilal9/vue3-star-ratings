import type { App } from "vue";
import { StarsRatings } from "./lib";

export default {
    install: (app: App) => {
        app.component('StarsRatings', StarsRatings);
    }
}

export { StarsRatings };