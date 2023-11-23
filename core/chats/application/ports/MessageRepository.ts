import { Message } from "../../domain/Messages"

export interface MessageRepository{
    findById(id : number) : Message | null
    findPaginated(pageSize : number, page : number) : Message[]
    save(message : Message) : boolean
}
