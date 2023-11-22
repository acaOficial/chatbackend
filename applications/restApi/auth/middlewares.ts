import { NextFunction, Request, Response  } from 'express';
import { UserAuthenticator } from '../../../core/users/application/useCases/UserAuthenticator';
import { User } from '../../../core/users/domain/User';
import { userRepository } from '../dependencies';

export const authenticateUserMiddleware = (req : Request , res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    const useCase = new UserAuthenticator(userRepository)
    const result = useCase.authenticate(token || "");
    if(result.isOk()) req.user = result.getValue() as User
    next();
};
  
