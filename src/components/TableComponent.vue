<template>
  <Button icon="pi pi-plus" rounded id="addButton" @click="add"/>
  <DataTable v-model:selection="selectedItem" :value="items" edit-mode="row" selection-mode="single" dataKey="id" :meta-key-selection="false">
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
  <Dialog v-model:visible="showEditUser" modal header="Modifica utente" :style="{ width: '30vw' }">
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
  <Dialog v-model:visible="showEditAlbum" modal header="Modifica album" :style="{ width: '30vw' }">
    <form @submit="onSubmit" @submit.prevent="onSubmit">
      <div>
        <label for="title">Nome:</label>
        <InputText id="title" v-model="title" type="text" :placeholder="title"></InputText>
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
    headers: Array,
    page:String
  },
  data(){
    return{
      selectedItem: null,
      showEditUser:false,
      showEditAlbum:false,
      name:null,
      email:null,
      title:null,
      editingRows:[]
    }
  },
  methods:{
    onRowSelect(){
      this.$router.push(`/albums/${this.selectedItem.id}`);
    },
    add(){
      if(this.page==="home"){
        this.name=""
        this.email=""
        this.showEditUser=true;
      } else if(this.page==="albums"){
        this.title=""
        this.showEditAlbum=true;
      }
    },
    onSubmit(){
      if(this.page==="home"){
        console.log(this.name, this.email);
        this.showEditUser=false;
      } else if(this.page==="albums"){
        console.log(this.title);
        this.showEditAlbum=false;
      }

    },
    edit(data){
      if(this.page==="home"){
        this.name=data.name
        this.email=data.email
        this.showEditUser=true;
      } else if(this.page==="albums"){
        this.title=data.title
        this.showEditAlbum=true;
      }

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
  margin-top:30px;
}
#submitButton{
  margin-top:25px;
}
</style>