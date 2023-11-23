import { ChatRepository } from "../application/ports/ChatRepository"
import { Chat } from "../domain/Chat"
import { UserId } from "../domain/UserId"

export class InMemoryChatRepository implements ChatRepository{
    private chats: Chat[] = []

    save(chat: Chat): Chat | null {
        this.chats.push(chat)
        return chat
    }

    update(message: Chat): boolean {
        const index = this.chats.findIndex(c => c.id === message.id)
        if (index !== -1) {
            this.chats[index] = message
            return true
        }
        return false
    }

    existPrivateChatBetweenUsers(UserIds: UserId[]): boolean {
        this.chats.forEach(chat => {
            if (chat.isPrivate && chat.members.includes(UserIds[0]) && chat.members.includes(UserIds[1])) return true
        })
        return false
    }

    findPaginated(pageSize: number, page: number): Chat[] {
        return this.chats.slice((page - 1) * pageSize, page * pageSize)
    }
}