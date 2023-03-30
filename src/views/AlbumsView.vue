<template>
  <div v-if="loaded">
    <h1>Album</h1>
    <TableComponent :items="items" :headers="headers" :page="page"></TableComponent>
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
    albumsStore().getAllAlbums().then(() => {
      this.items=albumsStore().albums.filter(album => album.userId==this.$route.params.id);
      this.loaded=true;
    })
  },
  data() {
    return {
      id: null,
      items: albumsStore().albums,
      loaded: false,
      headers: albumsStore().mapHeaderTable,
      page: "albums"
    }
  }
}
</script>

<style scoped>

</style>