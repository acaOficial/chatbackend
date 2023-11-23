import { UUIDGenerator } from "../../../shared/application/ports/UUIDGenerator";
import { Result } from "../../../shared/utils/Result";
import { Chat } from "../../domain/Chat";
import { UserId } from "../../domain/UserId";
import { ChatRepository } from "../ports/ChatRepository";

export class ChatCreator{
    constructor(
        private readonly chatRepository : ChatRepository,
        private readonly uuidGenerator : UUIDGenerator
    ){
    }

    create(members: UserId[], isPrivate: boolean){
        if(isPrivate && members.length > 2) return Result.fail("a private chat cannot have more than two members")
        if(members.length < 2) return Result.fail("a chat must have at least two members")
        if (this.chatRepository.existPrivateChatBetweenUsers(members) && isPrivate) return Result.fail("a private chat has already created")
        const uuid = this.uuidGenerator.generate()
        const chat = isPrivate ?  Chat.private(uuid, members[0], members[1]) : Chat.group(uuid, "pepe", members);
        this.chatRepository.save(chat)
        return Result.ok(chat);
    }
}