import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "@/scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/plugins/axios";

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: "fas",
});

// Filters
Vue.filter("capitalize", function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
