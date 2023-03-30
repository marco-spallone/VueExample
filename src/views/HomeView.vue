<template>
  <h1>Utenti</h1>
  <TableComponent :items="items" :headers="headers" :page="page"></TableComponent>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import {useMainStore} from "@/store";

export default {
  name: "HomeView",
  components: {
    TableComponent
  },
  beforeMount() {
    useMainStore().getAllUsers()
  },
  data(){
    return{
      items: JSON.parse(localStorage.getItem('users')),
      headers: useMainStore().mapHeaderTable,
      page:"home"
    }
  }
}
</script>

<style scoped>

</style>