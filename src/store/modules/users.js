import {defineStore} from "pinia/dist/pinia";
import usersService from "@/services/users";
export const usersStore = defineStore('usersStore', {
    state: () => ({
        users: [],
        mapHeaderTable: [
            {field: "name", header: "Nome"},
            {field: "email", header: "E-mail"}
        ],
        operations: [
            {action: 'EDIT', label: 'Modifica'},
            {action: 'DELETE', label: 'Elimina'}
        ]
    }),
    getters: {
        setItems: (state) => state.items
    },
    actions: {
        async getAllUsers() {
            await usersService.getUsers().then(res => {
                this.users=res;

            });
        },
        getUserById(id){
            let user;
            this.users.find(x => {
                if(x.id===id){
                    user=x;
                }
            })
            return user;
        },
        updateUser(user) {
            if(user.id==null){
                console.log('add')
                user.id=this.users.length+1;
                this.users.push(user);
            } else {
                console.log('edit')
                this.users.find(item => {
                    if (item.id == user.id) {
                        item = user;
                    }
                })
            }
        },
        deleteUser(user, index) {
            this.users.splice(index, 1);
        }
    }
})