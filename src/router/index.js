import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/serch",
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "@/views/Search.vue"),
  },
  {
    path: "/movie/:movieId",
    name: "Movie",
    component: () =>
      import(/* webpackChunkName: "movie" */ "@/views/Movie.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/*",
    redirect: "/search",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
