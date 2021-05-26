import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Analytics from "../views/Analytics.vue";
import Profile from "../views/Profile.vue";
import Chat from "../views/Chat.vue";
import { authGuard } from "../auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat,
      beforeEnter: authGuard
    },
    {
      path: "/analytics",
      name: "analytics",
      component: Analytics,
      beforeEnter: authGuard
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    }
  ]
});

export default router;
