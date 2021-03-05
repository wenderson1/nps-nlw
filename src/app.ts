
/**
 * Get => Busca
 * Post => Salvar
 * Put =>Alterar
 * Delete => Deletar
 * Patch => Alteração especificação


app.get("/", (request, response) => {
    return response.json({message:"Hello World - lindão"})
})

//1 param => rota(Recurso Api)
//2 param => request, response
app.post("/", (request, response) => {
    //recebeu os dados para salvar
    return response.json({message:"Os dados foram salvos com sucesso!"})
})
*/

import "express-async-errors";
import 'reflect-metadata';
import express, { NextFunction,Request, Response } from 'express';
import "./database";
import createConnection from './database';
import { router } from "./routes";
import { AppError } from './errors/AppError';

createConnection();
const app = express();
app.use(express.json());

app.use(router)
app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: 'Error',
        message:`Internal server error ${err.message}`
    })
})

export { app };
