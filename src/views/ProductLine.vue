<template>
  <tr>
    <td><v-text-field flat solo v-model="line.code"></v-text-field></td>
    <td><v-text-field flat solo v-model="line.name"></v-text-field></td>
    <td><v-text-field flat solo v-model="line.price"></v-text-field></td>
    <td><v-text-field flat solo v-model="line.tax"></v-text-field></td>
    <td><v-text-field flat solo v-model="TotalPrice"></v-text-field></td>
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
