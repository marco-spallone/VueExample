<template>
  <DataTable :value="items">
    <Column v-for="col of headers" :key="col.field" :field="col.field" :header="col.header"></Column>
  </DataTable>
</template>

<script>
export default {
  name: "TableComponent",
  props:{
    items:Array,
    headers: Array
  },
  mounted() {
    console.log(this.items)
    console.log(this.mapHeaderTable)
  }
}
</script>

<style scoped>

</style>