<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Code
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Price (EUR)
            </th>
            <th class="text-left">
              TAX
            </th>
            <th class="text-left">
              Price + TAX (EUR)
            </th>
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
    <v-btn elevation="2" @click="AddLine">Add line</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: [
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
    }
  }
};
</script>
