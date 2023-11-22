export class UserId {
    private readonly id: string;

    constructor(id?: string) {
        this.id = id ?? this.generateId();
    }

    private generateId(): string {
        // Implement your own ID generation logic here
        // For simplicity, we'll just use a simple placeholder
        return Math.random().toString(36).substring(2, 15);
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
