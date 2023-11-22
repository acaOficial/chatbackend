import { Result } from "../../../shared/utils/Result";
import { MessageRepository } from "../ports/MessageRepository";

class MessageEditor{
    constructor(
        private readonly messageRepository : MessageRepository
    ){
    }

    edit(messageId : number, editedContent: string){
        if(editedContent.length == 0) return Result.fail("message is empty")
        const message = this.messageRepository.get(messageId);
        if(!message) return Result.fail("this message does not exist")
        message.content = editedContent;
        this.messageRepository.update(message);
        return Result.ok(message)
    }
}