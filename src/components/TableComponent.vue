<template>
  <Button icon="pi pi-plus" rounded id="addButton" @click="$emit('event', null, null, 'ADD')"/>
  <DataTable v-model:selection="selectedItem" :value="items" edit-mode="row" selection-mode="single" dataKey="id" :meta-key-selection="false"
    @rowSelect="onRowSelect">
    <Column v-for="col of headers" :key="col.field" :field="col.field" :header="col.header"></Column>
    <Column v-for="act of operations" :key="act.action" :field="act.action" :header="act.label">
      <template #body="{data, index}">
        <div v-if="act.action==='EDIT'">
          <Button icon="pi pi-user-edit" severity="warning" text rounded @click="$emit('event', data, index, act.action)"></Button>
        </div>
        <div v-if="act.action==='DELETE'">
          <Button icon="pi pi-trash" severity="danger" text rounded @click="$emit('event', data, index, act.action)"></Button>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script>
export default {
  name: "TableComponent",
  props:{
    items:Array,
    headers: Array,
    page:String,
    operations:Array
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
      if(this.page==="home"){
        this.$router.push(`/albums/${this.selectedItem.id}`);
      }
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
    edit(data){
      if(this.page==="home"){
        this.name=data.name
        this.email=data.email
        this.showEditUser=true;
      } else if(this.page==="albums"){
        this.title=data.title
        this.showEditAlbum=true;
      }
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