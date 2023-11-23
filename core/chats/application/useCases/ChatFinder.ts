import { Result } from "../../../shared/utils/Result";
import { ChatRepository } from "../ports/ChatRepository";

export class ChatFinder{
    constructor(
        private readonly chatRepository : ChatRepository
    ){
    }

    find(page: number, pageSize : number){
        return Result.ok(this.chatRepository.findPaginated(pageSize, page))
    }
}