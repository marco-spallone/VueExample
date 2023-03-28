<template>
  <DataTable v-model:selection="selectedUser" :value="items" selection-mode="single" dataKey="id" :meta-key-selection="false"
    @rowSelect="onRowSelect()">
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
  data(){
    return{
      selectedUser: null
    }
  },
  methods:{
    onRowSelect(){
      //redirect con this.selectedUser.id
    }
  }
}
</script>

<style scoped>

</style>