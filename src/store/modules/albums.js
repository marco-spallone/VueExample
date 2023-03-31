import {defineStore} from "pinia/dist/pinia";
import albumsService from "@/services/albums";
export const albumsStore = defineStore('albumsStore', {
    state:()=>({
        albums:[],
        userId:null,
        mapHeaderTable: [
            {field:"title", header:"Titolo"}
        ],
        operations: [
            {action: 'EDIT', label: 'Modifica'},
            {action: 'DELETE', label: 'Elimina'}
        ]
    }),
    getters:{
        setItems: (state) => state.items
    },
    actions:{
        async getAllAlbums(){
            await albumsService.getAlbums().then(response => {
                console.log(response)
                this.albums=response.filter(album => album.userId==this.userId);
                console.log(this.albums)
            })
            .catch(err => console.log(err))
        },
        getAlbumById(id){
            let album;
            this.albums.find(x => {
                if(x.id===id){
                    album=x;
                }
            })
            return album;
        },
        updateAlbum(album) {
            console.log(album)
            if (album.id == null) {
                album.id = this.albums.length + 1;
                console.log(album.id)
                this.albums.push(album);
                console.log(this.albums)
            } else {
                this.albums.find((item, index) => {
                    if (item.id === album.id) {
                        this.albums[index] = album;
                    }
                })
            }
        },
        deleteAlbum(album, index){
            this.albums.splice(index, 1);
        }
    }
})