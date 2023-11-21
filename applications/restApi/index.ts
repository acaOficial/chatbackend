import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import authRouter from './auth/views';
import { App } from '../share/app';

export class ExpressRestApi implements App{
    private readonly app : Application;
    private readonly port : number;

    constructor(port : number){
        dotenv.config();
        this.app = express();
        this.port = parseInt(process.env.PORT || "8000");
    }

    private configurate(){
        this.app.use(express.json());
        this.app.use('/auth', authRouter)
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