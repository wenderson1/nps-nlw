import express, { response } from 'express';

const app = express();

/**
 * Get => Busca
 * Post => Salvar
 * Put =>Alterar
 * Delete => Deletar
 * Patch => Alteração especificação
*/

app.get("/", (request, response) => {
    return response.json({message:"Hello World - lindão"})
})

//1 param => rota(Recurso Api)
//2 param => request, response
app.post("/", (request, response) => {
    //recebeu os dados para salvar
    return response.json({message:"Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server is running!"));
