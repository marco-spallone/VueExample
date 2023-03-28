<template>
  <TableComponent :items="items" :headers="headers"></TableComponent>
</template>

<script>
import TableComponent from "@/components/UsersTableComponent.vue";
import {useMainStore} from "@/store/modules/users";

export default {
  name: "HomeView",
  components: {
    TableComponent
  },
  beforeMount() {
    useMainStore().getAllItems()
  },
  data(){
    return{
      items: JSON.parse(localStorage.getItem('users')),
      headers: useMainStore().mapHeaderTable
    }
  }
}
</script>

<style scoped>

</style>