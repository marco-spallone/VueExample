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
                user.id=this.users.length+1;
                this.users.push(user);
            } else {
                this.users.find((item, index) => {
                    if(item.id===user.id){
                        this.users[index]=user;
                    }
                })
                console.log(this.users);

            }
        },
        deleteUser(user, index) {
            this.users.splice(index, 1);
        }
    }
})