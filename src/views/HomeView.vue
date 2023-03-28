<template>
  <TableComponent :items="items" :headers="headers"></TableComponent>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
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
      items: useMainStore().items,
      headers: useMainStore().mapHeaderTable
    }
  }
}
</script>

<style scoped>

</style>