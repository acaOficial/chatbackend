import { MessageRepository } from "../application/ports/MessageRepository";
import { Message } from "../domain/Messages";

export class InMemoryMessageRepository implements MessageRepository {
    private messages: Message[];

    constructor() {
        this.messages = [];
    }

    findById(id: number): Message | null {
        return this.messages.find(message => message.id === id) || null;
    }

    findPaginated(pageSize: number, page: number): Message[] {
        const startIndex = (page - 1) * pageSize;
        return this.messages.slice(startIndex, startIndex + pageSize);
    }

    save(message: Message): boolean {
        this.messages.push(message);
        return true;
    }
}