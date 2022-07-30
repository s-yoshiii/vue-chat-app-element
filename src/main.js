import { createApp } from "vue";
import App from "./App.vue";
import "destyle.css";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
createApp(App).use(router).mount("#app");
