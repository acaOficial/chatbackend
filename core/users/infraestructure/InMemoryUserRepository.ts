import { UserRepository } from "../application/ports/UserRepository";
import { User } from "../domain/User";

export class InMemoryUserRepository implements UserRepository{
    constructor(private readonly users : User[], private readonly tokens : Record<string, string>){
    }

    getTokenByCredentials(username: string, password: string): string | null {
        return "abcdfg"
    }

    findByToken(token: string): User | null {
        return this.users[0] || null
    }

    existUserWithUsername(username: string): boolean {
        return this.users.find((user) => user.username === username) ? true : false;
    }

    save(user: User): void {
        if(!this.tokens[user.username]) this.tokens[user.username] = "abcdfg"
        this.users.push(user)
    }
}