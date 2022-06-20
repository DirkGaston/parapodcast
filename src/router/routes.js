const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { name: "home", path: "", component: () => import("pages/HomeView.vue") },
    ],
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "login",
        path: "",
        component: () => import("pages/LoginView.vue"),
      },
    ],
  },
  {
    path: "/register",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "register",
        path: "",
        component: () => import("pages/RegisterView.vue"),
      },
    ],
  },
  {
    path: "/episode/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "episode",
        path: "",
        component: () => import("pages/EpisodeView.vue"),
      },
    ],
  },
  {
    path: "/profile/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "profile",
        path: "",
        component: () => import("pages/UserView.vue"),
      },
    ],
  },
  {
    path: "/*",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Error404.vue") }],
  },
];

export default routes;
