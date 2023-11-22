import express, { Application, Router } from 'express';
import dotenv from 'dotenv';
import authRouter from './auth/views';
import { App } from '../share/app';
import { authenticateUserMiddleware } from './auth/middlewares';
import { Result } from '../../core/shared/utils/Result';

export class ExpressRestApi implements App{
    private readonly app : Application;
    private readonly port : number;

    constructor(port : number){
        dotenv.config();
        this.app = express();
        this.port = parseInt(process.env.PORT || "8000");
    }

    private configurate(){
        this.registerMiddleware(express.json());
        this.registerMiddleware(authenticateUserMiddleware)
        this.registerRoute('/auth', authRouter)
    }

    private registerMiddleware(middleware : any){
        this.app.use(middleware)
    }

    private registerRoute(path : string, route: Router){
        this.app.use(path, route)
    }

    public get router(){
        return this.app.router
    }

    public run() {
        this.configurate();
        this.app.listen(this.port, () => {
            console.log(`Server is Fire at http://localhost:${this.port}`);
        });     
    }
}