<template>
  <Button icon="pi pi-plus" rounded aria-label="Filter" id="addButton" @click="add"/>
  <DataTable v-model:selection="selectedUser" :value="items" edit-mode="row" selection-mode="single" dataKey="id" :meta-key-selection="false"
             @rowSelect="onRowSelect()" id="usersTable">
    <Column v-for="col of headers" :key="col.field" :field="col.field" :header="col.header">
    </Column>
    <Column header="Modifica" :row-editor="true">
      <template #body="{ data, index }">
        <Button type="button" icon="pi pi-user-edit" severity="warning" text rounded @click="edit(data, index)" />
      </template>
    </Column>
    <Column header="Elimina" :row-editor="true">
      <template #body="{ data, index }">
        <Button type="button" icon="pi pi-trash" severity="danger" text rounded @click="remove(data, index)" />
      </template>
    </Column>
  </DataTable>
  <Dialog v-model:visible="showModal" modal header="Inserisci utente" :style="{ width: '30vw' }">
    <form @submit="onSubmit" @submit.prevent="onSubmit">
      <div>
        <label for="name">Nome:</label>
        <InputText id="name" v-model="name" type="text" :placeholder="name"></InputText>
      </div>
      <div>
        <label for="email">E-mail:</label>
        <InputText id="email" v-model="email" type="email" :placeholder="email"></InputText>
      </div>
      <Button type="submit" label="Conferma" id="submitButton"></Button>
    </form>
  </Dialog>
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
      selectedUser: null,
      showModal:false,
      name:null,
      email:null,
      editingRows:[]
    }
  },
  methods:{
    onRowSelect(){
      this.$router.push(`/albums/${this.selectedUser.id}`);
    },
    add(){
      this.name=""
      this.email=""
      this.showModal=true;
    },
    onSubmit(){
      console.log(this.name, this.email);
      this.showModal=false;
    },
    edit(data){
      this.name=data.name
      this.email=data.email
      this.showModal=true;
    },
    remove(data, index){
      console.log(data, index)
    }
  }
}
</script>

<style scoped>
#addButton{
  margin-bottom:30px;
}
#submitButton{
  margin-top:25px;
}
</style>