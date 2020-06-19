import { Request, Response } from 'express'

export function welcome(req: Request, res: Response): Response {
   return res.json('Bem vindo Posts API'); 
}