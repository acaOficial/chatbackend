import { User } from "../../domain/User";

export interface UserRepository{
    save(user : User) : void,
    existUserWithUsername(username : string) : boolean
}