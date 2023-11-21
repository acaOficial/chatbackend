import { UUIDGenerator } from "../application/ports/UUIDGenerator";

export class MockUUIDGenerator implements UUIDGenerator {
    private static currentId = 0;

    generate(): string {
        MockUUIDGenerator.currentId++;
        return MockUUIDGenerator.currentId.toString();
    }

};