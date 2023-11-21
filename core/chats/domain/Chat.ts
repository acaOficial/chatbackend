import { UUID } from "../../shared/domain/UUID";
import { UserId } from "./UserId";

export class Chat{
    constructor(
        public readonly id : UUID,
        public members : UserId[],
        public name ?: string
    ){}
}