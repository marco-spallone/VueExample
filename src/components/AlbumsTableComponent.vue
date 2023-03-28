<template>
  <DataTable :value="items">
    <Column v-for="col of headers" :key="col.field" :field="col.field" :header="col.header"></Column>
  </DataTable>
</template>

<script>
export default {
  name: "AlbumsTableComponent",
  props: {
    items:Array,
    headers: Array
  }
}
</script>

<style scoped>

</style>