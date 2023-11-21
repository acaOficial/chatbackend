import { Express, Request, Response, Router } from 'express';
import { userRepository, uuidGenerator } from '../dependencies';
import { UserRegistrar } from '../../../core/users/application/useCases/UserRegistrar';
import { UserAuthenticator } from '../../../core/users/application/useCases/UserAuthenticator';
import { UserTokenFinder } from '../../../core/users/application/useCases/UserTokenFinder';

const router = Router()

router.post('/register/', (req : Request, res : Response) => {
    const {username, password, firstName, lastName} = req.body;
    const useCase = new UserRegistrar(userRepository, uuidGenerator);
    const result =  useCase.register(username, password, firstName, lastName)
    if(result.isError()) 
      res.json({
        "error" : result.getError()
      })
    res.json(result.getValue())
  }
);

router.post('/login/', (req : Request, res : Response) => {
    const { username, password } = req.body;
    const useCase = new UserTokenFinder(userRepository)
    const result =  useCase.find(username, password)
    if(result.isError()) res.json({
        "error" : result.getError()
      })
    res.json({
        "token" : result.getValue()
    })
  }
);

export default router;