import { createApp } from "vue";
import "../src/styles/index";
import App from "./App.vue";
import router from "./router";

import "virtual:uno.css";
import "uno.css";

createApp(App).use(router).mount("#app");
