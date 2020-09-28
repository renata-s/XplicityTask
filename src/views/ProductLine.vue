<template>
  <tr>
    <td><v-text-field v-model="line.code"></v-text-field></td>
    <td><v-text-field v-model="line.name"></v-text-field></td>
    <td><v-text-field v-model="line.price"></v-text-field></td>
    <td><v-text-field v-model="line.tax"></v-text-field></td>
    <td><v-text-field v-model="TotalPrice"></v-text-field></td>
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
