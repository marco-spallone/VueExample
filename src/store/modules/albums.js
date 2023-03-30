import {defineStore} from "pinia/dist/pinia";
import albumsService from "@/services/albums";
export const albumsStore = defineStore('albumsStore', {
    state:()=>({
        albums:[],
        mapHeaderTable: [
            {field:"title", header:"Titolo"}
        ]
    }),
    getters:{
        setItems: (state) => state.items
    },
    actions:{
        async getAllAlbums(){
            await albumsService.getAlbums().then(response => {
                    this.albums=response.data;
                })
                .catch(err => console.log(err))
        },
        addAlbum(user){
            this.users.push(user);
        },
        updateAlbum(user){
            this.users.find(item => {
                if(item.id==user.id){
                    item=user;
                }
            })
        },
        deleteAlbum(user, index){
            this.users.splice(index, 1);
        }
    }
})