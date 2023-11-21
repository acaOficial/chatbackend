import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { InMemoryUserRepository } from './core/users/infraestructure/InMemoryUserRepository';
import { MockUUIDGenerator } from './core/shared/infraestructure/MockUUIDGenerator';
import { RegisterUserUseCase } from './core/users/application/useCases/RegisterUserUseCase';

const userRepository = new InMemoryUserRepository([])
const uuidGenerator = new MockUUIDGenerator();

dotenv.config();

const app : Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post('/auth/register/', (req : Request, res : Response) => {
    const {username, password, firstName, lastName} = req.body;
    const useCase = new RegisterUserUseCase(userRepository, uuidGenerator);
    const result =  useCase.execute(username, password, firstName, lastName)
    if(result.isError()) 
      res.json({
        "error" : result.getError()
      })
    res.json(result.getValue())
  }
);

app.listen(port, () => {
  console.log('Server is Fire at http://localhost:${port}');
}); 
