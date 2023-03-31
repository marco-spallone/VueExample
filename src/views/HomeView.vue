<template>
  <h1>Utenti</h1>
  <TableComponent :items="items" :headers="headers" :page="page" :operations="operations" @event="event"></TableComponent>
  <Dialog v-model:visible="showEditUser" modal header="Modifica utente" :style="{ width: '30vw' }">
    <form>
      <div>
        <label for="name">Nome:</label>
        <InputText id="name" v-model="name" type="text" :placeholder="name"></InputText>
      </div>
      <div>
        <label for="email">E-mail:</label>
        <InputText id="email" v-model="email" type="email" :placeholder="email"></InputText>
      </div>
      <Button type="button" label="Conferma" id="submitButton" @click="onSubmit"></Button>
    </form>
  </Dialog>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import {usersStore} from "@/store/modules/users";

export default {
  name: "HomeView",
  components: {
    TableComponent
  },
  beforeMount() {
    usersStore().getAllUsers().then(() => {
      this.items=usersStore().users;
    })
  },
  data(){
    return{
      items: usersStore().users,
      headers: usersStore().mapHeaderTable,
      page:"home",
      operations: usersStore().operations,
      showEditUser:false,
      id:null,
      name:null,
      email:null
    }
  },
  methods:{
    event(data, index, action){
      if(action==='ADD'){
        this.name=""
        this.email=""
        this.showEditUser=true;
      } else if(action==='EDIT'){
        this.id=data.id;
        this.name=data.name;
        this.email=data.email;
        this.showEditUser=true;
      } else if(action==='DELETE'){
        usersStore().deleteUser(data, index);
      }
    },
    onSubmit(){
      if(this.id==null){
        let user = {
          id:null,
          name:this.name,
          email:this.email
        }
        usersStore().updateUser(user);
      } else {
        let user = usersStore().getUserById(this.id);
        user.name=this.name;
        user.email=this.email;
        usersStore().updateUser(user)
      }
      this.id=null;
      this.showEditUser=false;
    }
  }
}
</script>

<style scoped>
#submitButton{
  margin-top:25px;
}
</style>