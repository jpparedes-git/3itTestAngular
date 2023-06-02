import { Music } from "./music";
import { User } from "./user";

export class Response {
    id: string;
    
    user : User;
    music : Music;

    constructor(id : string, _user : User, _music : Music){
        this.id = id;
        this.user = _user;
        this.music = _music;
    }
}