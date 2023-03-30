import axios from "axios";

export default class albumsService {
    static async getAlbums(){
        let result;
        await axios.get('https://jsonplaceholder.typicode.com/albums').then(res => {
            result=res.data;
        });
        return result;
    }
}