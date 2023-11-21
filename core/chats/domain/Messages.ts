import { Chat } from "./Chat";
import { UserId } from "./UserId";
import { UUID } from "../../shared/domain/UUID";

class Message{
    constructor(
        public readonly id : UUID, 
        public content : string, 
        public author : UserId, 
        public chat : Chat
    ){};
}