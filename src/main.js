import { createApp } from "vue";
import App from "./App.vue";
import "destyle.css";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App).use(router).mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
