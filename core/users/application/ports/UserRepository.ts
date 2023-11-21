import { User } from "../../domain/User";

export interface UserRepository{
    save(user : User) : void,
    existUserWithUsername(username : string) : boolean
    findByToken(token : string) : User | null
    getTokenByCredentials(username : string, password : string) : string | null
}