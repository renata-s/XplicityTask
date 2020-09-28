import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";
import ProductsBill from "../views/ProductsBill.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products
  },
  {
    path: "/ProductsBill",
    name: "ProductsBill",
    component: ProductsBill
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
