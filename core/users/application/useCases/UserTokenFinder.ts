import { UUIDGenerator } from "../../../shared/application/ports/UUIDGenerator";
import { Result } from "../../../shared/utils/Result";
import { User } from "../../domain/User";
import { UserRepository } from "../ports/UserRepository";

export class UserTokenFinder{
    constructor(
        private readonly userRepository : UserRepository,
        ){
    }

    public find(username : string, password : string) {
            const token = this.userRepository.getTokenByCredentials(username, password)
            if(token) return Result.ok(token)
            return Result.fail("this credentials doesnt exist")
    }
}