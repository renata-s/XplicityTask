<template>
  <tr>
    <td>
      <v-text-field
        flat
        solo
        v-model="line.code"
        class="product-editor"
      ></v-text-field>
    </td>
    <td>
      <v-text-field
        flat
        solo
        v-model="line.name"
        class="product-editor"
      ></v-text-field>
    </td>
    <td>
      <v-text-field
        flat
        solo
        v-model="line.price"
        class="product-editor"
      ></v-text-field>
    </td>
    <td>
      <v-text-field
        flat
        solo
        v-model="line.tax"
        class="product-editor"
      ></v-text-field>
    </td>
    <td>
      <v-text-field
        flat
        solo
        v-model="TotalPrice"
        class="product-editor"
      ></v-text-field>
    </td>
  </tr>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["line"],
  computed: {
    TotalPrice: {
      get() {
        return (
          Number(this.line.price) + this.line.price * (this.line.tax / 100.0)
        );
      }
    }
  }
};
</script>
