import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import Products from "./views/Products.vue";
import ProductLine from "./views/ProductLine.vue";

Vue.component("Products", Products);
Vue.component("ProductLine", ProductLine);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
