import { UUIDGenerator } from "../../../shared/application/ports/UUIDGenerator";
import { Result } from "../../../shared/utils/Result";
import { User } from "../../domain/User";
import { UserRepository } from "../ports/UserRepository";

export class UserRegistrar{
    constructor(
        private readonly userRepository : UserRepository,
        private readonly uuidGenerator : UUIDGenerator
        ){
    }

    public register(
        username : string, 
        password : string, 
        firstName : string, 
        lastName : string) {
            if(this.userRepository.existUserWithUsername(username)) return Result.fail("Username already taken");
            const uuid = this.uuidGenerator.generate();
            const user = new User(uuid, username, password, firstName, lastName)
            this.userRepository.save(user)
            return Result.ok(user)
    }
}