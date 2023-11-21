import { Express, Request, Response , Application, NextFunction } from 'express';
import { UserAuthenticator } from '../../../core/users/application/useCases/UserAuthenticator';
import { userRepository } from '../dependencies';
import { User } from '../../../core/users/domain/User';

const authenticateToken = (req : Request , res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const useCase = new UserAuthenticator(userRepository)
    const result =useCase.authenticate(token || "");
    if(result.isOk()) req.user = result.getValue() as User

    next();
  };
  