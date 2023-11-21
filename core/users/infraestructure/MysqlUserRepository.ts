import { UserRepository } from "../application/ports/UserRepository";
import { User } from "../domain/User";

export class MysqlUserRepository implements UserRepository{
    existUserWithUsername(username: string): boolean {
        throw new Error("Method not implemented.");
    }
    save(user: User): void {
        "CREATE USER()"
    }
}