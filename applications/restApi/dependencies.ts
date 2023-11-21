import { InMemoryUserRepository } from '../../core/users/infraestructure/InMemoryUserRepository';
import { MockUUIDGenerator } from '../../core/shared/infraestructure/MockUUIDGenerator';

export const userRepository = new InMemoryUserRepository([], {})
export const uuidGenerator = new MockUUIDGenerator();