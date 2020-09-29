<template>
  <tr>
    <td class="product-readonly">{{ line.code }}</td>
    <td class="product-readonly">{{ line.name }}</td>
    <td class="product-readonly">{{ line.price }}</td>
    <td class="product-readonly">{{ line.tax }}</td>
    <td class="product-readonly">{{ TotalPrice }}</td>
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
