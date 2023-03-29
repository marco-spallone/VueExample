import {defineStore} from "pinia/dist/pinia";
import axios from "axios";

export const useMainStore = defineStore('mainStore', {
    state:()=>({
        users:[],
        mapHeaderTable: [
            {field:"name", header:"Nome"},
            {field:"email", header:"E-mail"}
        ]
    }),
    getters:{
        setItems: (state) => state.items
    },
    actions:{
        async getAllUsers(){
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.users=response.data;
                    localStorage.setItem('users', JSON.stringify(response.data));
                })
                .catch(err => console.log(err))
        }
    }
})