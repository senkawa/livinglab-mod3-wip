import { createApp } from "vue";
import App from "./App.vue";
import router, { registerDefaultTitle } from "./router";
import store from "./store";
import "./styles/app.css";

registerDefaultTitle("Living Lab");

createApp(App).use(router).use(store).mount("#app");
