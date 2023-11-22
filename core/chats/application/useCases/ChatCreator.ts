import { Result } from "../../../shared/utils/Result";
import { Chat } from "../../domain/Chat";
import { UserId } from "../../domain/UserId";

export interface ChatRepository{
    save(chat : Chat) : Chat | null
    update(message : Chat) : boolean
    existPrivateChatBetweenUsers(UserIds : UserId[]): boolean
}

class ChatCreator{
    constructor(
        private readonly chatRepository : ChatRepository
    ){
    }

    create(members: UserId[], isPrivate: boolean){
        if (this.chatRepository.existPrivateChatBetweenUsers(members) && isPrivate) return Result.fail("a private chat has already created")
        const chat = isPrivate ?  Chat.private("1", members[0], members[1]) : Chat.group("2", "pepe", members);
        this.chatRepository.save(chat)
        return Result.ok(chat);
    }
}