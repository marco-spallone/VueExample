<template>
  <div v-if="loaded">
    <AlbumsTableComponent :items="items" :headers="headers"></AlbumsTableComponent>
  </div>
  <div v-else>
    <p>CARICAMENTO...</p>
  </div>
</template>

<script>
import AlbumsTableComponent from '@/components/AlbumsTableComponent.vue';
import axios from "axios";

export default {
  name: "AlbumsView",
  components: {AlbumsTableComponent},
  data() {
    return {
      id: null,
      items: JSON.parse(localStorage.getItem('albums')).filter(item => item.userId==this.id),
      loaded: false,
      headers: [
          {field:"title", header:"Titolo"}
      ]
    }
  },
  beforeMount() {
    this.getAlbums(this.$route.params.id);
  },
  methods:{
    getAlbums(id){
      axios.get('https://jsonplaceholder.typicode.com/albums')
          .then(response => {
            this.items = response.data.filter(data => data.userId==id);
            localStorage.setItem('albums', JSON.stringify(this.items));
            this.loaded=true;
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>