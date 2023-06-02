import { Music } from "./music";
import { User } from "./user";

export class Vote {
    user : User;
    music : Music;

    constructor(user : User, music : Music){
        this.user = user;
        this.music = music;
    }
}
