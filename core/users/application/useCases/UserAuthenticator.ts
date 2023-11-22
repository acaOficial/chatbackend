import { UUIDGenerator } from "../../../shared/application/ports/UUIDGenerator";
import { Result } from "../../../shared/utils/Result";
import { User } from "../../domain/User";
import { UserRepository } from "../ports/UserRepository";

export class UserAuthenticator{
    constructor(
        private readonly userRepository : UserRepository,
        ){
    }

    public authenticate(token : string) {
            const user = this.userRepository.findByToken(token)
            if(user) return Result.ok(user)
            return Result.fail("this token does not correspond to any user")
    }
}