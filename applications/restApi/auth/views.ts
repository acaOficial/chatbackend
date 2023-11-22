import { Request, Response, Router } from 'express';
import { userRepository, uuidGenerator } from '../dependencies';
import { UserRegistrar } from '../../../core/users/application/useCases/UserRegistrar';
import { UserTokenFinder } from '../../../core/users/application/useCases/UserTokenFinder';
import { isAuthenticatedOnly } from './middlewares';

const router = Router()

router.post('/register/', (req : Request, res : Response) => {
    const { username, password, firstName, lastName } = req.body;
    const useCase = new UserRegistrar(userRepository, uuidGenerator);
    const result =  useCase.register(username, password, firstName, lastName)
    res.send(result);
  }
);

router.post('/login/', (req : Request, res : Response) => {
    const { username, password } = req.body;
    const useCase = new UserTokenFinder(userRepository)
    const result =  useCase.find(username, password)
    res.send(result);
  }
);

export default router;
