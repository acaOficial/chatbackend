import { Chat } from "../../domain/Chat"
import { UserId } from "../../domain/UserId"

export interface ChatRepository{
    save(chat : Chat) : Chat | null
    update(message : Chat) : boolean
    existPrivateChatBetweenUsers(UserIds : UserId[]): boolean
    findPaginated(pageSize : number, page : number) : Chat[]
}
