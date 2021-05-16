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
    path: "/*",
    redirect: "/search",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
