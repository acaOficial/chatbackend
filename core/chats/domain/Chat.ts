import { UUID } from "../../shared/domain/UUID";
import { UserId } from "./UserId";

export class Chat{
    constructor(
        public readonly id : UUID,
        public members : UserId[],
        public name ?: string,
        public isPrivate : boolean = false
    ){
        if(this.members.length > 2 && this.isPrivate == true) new Error("You cannot create a private chat with more than two members")
    }

    public static private(id : string, firstMember : UserId, secondMember : UserId){
        return new Chat(id, [firstMember, secondMember], `privateChat-${firstMember}-${secondMember}`, false)
    }

    public static group(id : string,  name : string, members : UserId[]){
        return new Chat(id, members, name, true)
    }
}