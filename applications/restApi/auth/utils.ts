import { Request, Response } from 'express';


const withAuthentication = <T>(F : (req: Request, res: Response) => T, req: Request, res: Response) => {
    if(!req.user) return res.status(401).send("unauthorized")
    return F(req, res)
};