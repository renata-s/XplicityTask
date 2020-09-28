<template>
  <tr>
    <td>{{ line.code }}</td>
    <td>{{ line.name }}</td>
    <td>{{ line.price }}</td>
    <td>{{ line.tax }}</td>
    <td>{{ TotalPrice }}</td>
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
