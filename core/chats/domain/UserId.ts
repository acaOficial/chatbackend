export class UserId {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }

    public equals(other: UserId): boolean {
        return this.id === other.id;
    }

    public toString(): string {
        return `UserId: ${this.id}`;
    }
}
