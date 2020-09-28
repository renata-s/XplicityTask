import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import ProductLine from "./views/ProductLine.vue";
import ProductLineReadonly from "./views/ProductLineReadonly.vue";
Vue.component("ProductLine", ProductLine);
Vue.component("ProductLineReadonly", ProductLineReadonly);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
