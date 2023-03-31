<template>
  <div v-if="loaded">
    <h1>Album</h1>
    <TableComponent :items="items" :headers="headers" :page="page" :operations="operations" @event="event"></TableComponent>
    <Dialog v-model:visible="showEditAlbum" modal header="Modifica album" :style="{ width: '30vw' }">
      <form>
        <div>
          <label for="title">Nome:</label>
          <InputText id="title" v-model="title" type="text" :placeholder="title"></InputText>
        </div>
        <Button type="button" label="Conferma" id="submitButton" @click="onSubmit"></Button>
      </form>
    </Dialog>
  </div>
  <div v-else>
    <p>CARICAMENTO...</p>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import {albumsStore} from "@/store/modules/albums";

export default {
  name: "AlbumsView",
  components: {TableComponent},
  beforeMount() {
    this.id=this.$route.params.id;
    albumsStore().userId=this.id;
    albumsStore().getAllAlbums().then(() => {
      this.items=albumsStore().albums;
      this.loaded=true;
    })
  },
  data() {
    return {
      id: null,
      items: albumsStore().albums,
      loaded: false,
      headers: albumsStore().mapHeaderTable,
      page: "albums",
      showEditAlbum:false,
      title:null,
      albumId:null,
      operations:albumsStore().operations
    }
  },
  methods:{
    event(data, index, action){
      if(action==='ADD'){
        this.title=""
        this.showEditAlbum=true;
      } else if(action==='EDIT'){
        this.albumId=data.id;
        this.title=data.title;
        this.showEditAlbum=true;
      } else if(action==='DELETE'){
        albumsStore().deleteAlbum(data, index);
      }
    },
    onSubmit(){
      if(this.albumId==null){
        let album = {
          userId:parseInt(this.id),
          id:null,
          title:this.title
        }
        albumsStore().updateAlbum(album);
      } else {
        let album = albumsStore().getAlbumById(this.albumId);
        album.title=this.title;
        albumsStore().updateAlbum(album)
      }
      this.albumId=null;
      this.showEditAlbum=false;
    }
  }
}
</script>

<style scoped>

</style>