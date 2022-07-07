const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { name: "home", path: "", component: () => import("pages/HomeView.vue") },
      {
        name: "login",
        path: "/login",
        component: () => import("pages/LoginView.vue"),
      },
      {
        name: "register",
        path: "/register",
        component: () => import("pages/RegisterView.vue"),
      },
      {
        name: "episode",
        path: "/episode/:id",
        component: () => import("pages/EpisodeView.vue"),
      },
      {
        name: "profile",
        path: "/profile/:id",
        component: () => import("pages/UserView.vue"),
      },
      {
        name: "admin",
        path: "/admin",
        component: () => import("pages/AdminView.vue"),
        meta: {
          auth: true,
        },
      },
      {
        name: "edit",
        path: "/edit/:id",
        component: () => import("pages/EditView.vue"),
        meta: {
          auth: true,
        },
      },
      { path: "/*", component: () => import("pages/Error404.vue") },
    ],
  },
];

export default routes;
