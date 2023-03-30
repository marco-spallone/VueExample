import axios from "axios";

export default class usersService {
    static async getUsers(){
        let result;
        await axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            result=res.data;
        });
        return result;
    }
}