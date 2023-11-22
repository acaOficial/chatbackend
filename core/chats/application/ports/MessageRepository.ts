import { Message } from "../../domain/Messages"

export interface MessageRepository{
    get(id : number) : Message | null
    update(message : Message) : boolean
}

