import {defineStore} from "pinia/dist/pinia";
import axios from "axios";

export const useMainStore = defineStore('mainStore', {
    state:()=>({
        items:[],
        mapHeaderTable: [
            {field:"name", header:"Nome"},
            {field:"email", header:"E-mail"}
        ]
    }),
    getters:{
        setItems: (state) => state.items
    },
    actions:{
        async getAllItems(){
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => this.items=response.data)
                .catch(err => console.log(err))
        }
    }
})