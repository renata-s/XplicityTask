<template>
  <div>
    <v-simple-table class="product-table">
      <template v-slot:default>
        <thead>
          <tr>
            <th align="left">Code</th>
            <th align="left">Name</th>
            <th align="left">Price (EUR)</th>
            <th align="left">TAX</th>
            <th align="left">Price + TAX (EUR)</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in prices">
            <ProductLine :key="index" :line="item" />
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <v-text-field flat solo readonly value="Subtotal:"></v-text-field>
            </td>
            <td>
              <v-text-field
                flat
                solo
                readonly
                v-model="TotalLinesPrice"
              ></v-text-field>
            </td>
          </tr>
        </tfoot>
      </template>
    </v-simple-table>
    <v-btn dark class="add-line" @click="AddLine">Add line</v-btn>

    <v-footer absolute>
      <v-col align="right">
        <v-btn color="error" dark large @click="Continue"> Continue </v-btn>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
let productsfromLocalStorage = null;
export default {
  data() {
    return {
      prices: productsfromLocalStorage ?? [
        {
          id: 1,
          code: "3456",
          name: "T-shirt",
          price: "20",
          tax: 21
        }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    let products = localStorage.getItem("products");
    if (products) {
      productsfromLocalStorage = JSON.parse(products);
    }
    next();
  },
  computed: {
    TotalLinesPrice: {
      get() {
        return this.prices.reduce(function(total, value) {
          return Number(total) + Number(value.price);
        }, 0);
      }
    }
  },
  methods: {
    AddLine() {
      this.prices.push({
        id: 1,
        code: "",
        name: "",
        price: "",
        tax: 21
      });
    },
    Continue() {
      localStorage.setItem("products", JSON.stringify(this.prices));
      this.$router.push("/ProductsBill");
    }
  }
};
</script>
