<template>
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
    </template>
  </v-simple-table>
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
  }
};
</script>
