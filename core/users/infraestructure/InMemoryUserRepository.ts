import { UserRepository } from "../application/ports/UserRepository";
import { User } from "../domain/User";

export class InMemoryUserRepository implements UserRepository{
    constructor(private readonly users : User[]){
    }
    existUserWithUsername(username: string): boolean {
        return this.users.find((user) => user.username === username) ? true : false;
    }

    save(user: User): void {
        this.users.push(user)
    }
}