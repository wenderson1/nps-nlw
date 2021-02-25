
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

import 'reflect-metadata';
import express from 'express';
import "./database";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router)
app.listen(3333, () => console.log("Server is running!"));
