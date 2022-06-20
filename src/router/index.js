import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { currentUserPromise } from "../firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requireAuth = to.meta.auth;
  const user = await currentUserPromise();

  if (requireAuth) {
    if (user) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
