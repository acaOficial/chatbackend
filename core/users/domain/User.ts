import { UUID } from "../../shared/domain/UUID";

export class User{
    constructor(
        public readonly id : string, 
        public username : string, 
        public password : string, 
        public firstName : string, 
        public lastName : string
    ){}
}