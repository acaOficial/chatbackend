import { InMemoryUserRepository } from '../../core/users/infraestructure/InMemoryUserRepository';
import { MockUUIDGenerator } from '../../core/shared/infraestructure/MockUUIDGenerator';
import { InMemoryChatRepository } from '../../core/chats/infraestructure/InMemoryChatRepository';
import { InMemoryMessageRepository } from '../../core/chats/infraestructure/InMemoryMessageRepository';

export const userRepository = new InMemoryUserRepository([], {})
export const uuidGenerator = new MockUUIDGenerator();
export const chatRepository = new InMemoryChatRepository();
export const messageRepository = new InMemoryMessageRepository();

