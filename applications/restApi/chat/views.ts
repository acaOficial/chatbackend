import { Request, Response, Router } from 'express';
import { chatRepository, userRepository, uuidGenerator } from '../dependencies';
import { UserRegistrar } from '../../../core/users/application/useCases/UserRegistrar';
import { ChatCreator } from '../../../core/chats/application/useCases/ChatCreator';
import { ChatFinder } from '../../../core/chats/application/useCases/ChatFinder';
import { Result } from '../../../core/shared/utils/Result';
import { isAuthenticatedOnly } from '../auth/middlewares';

const router = Router()

router.get('/', isAuthenticatedOnly, (req : Request, res : Response) => {
    const useCase = new ChatFinder(chatRepository);
    const result =  useCase.find(1, 10)
    res.send(result);
  }
);

router.post('/', isAuthenticatedOnly, (req : Request, res : Response) => {
    const { members, isPrivate } = req.body;
    const useCase = new ChatCreator(chatRepository, uuidGenerator);
    const result = useCase.create([...members, req.user?.id], isPrivate)
    res.send(result);
  }
);

export default router;
