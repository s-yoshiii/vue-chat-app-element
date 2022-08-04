import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import ChatBoard from "../views/ChatBoard.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/chat",
    name: "ChatBoard",
    component: ChatBoard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
