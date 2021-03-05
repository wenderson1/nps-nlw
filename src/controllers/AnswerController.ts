import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import {AppError} from '../errors/AppError';

class AnswerController{

    //http://localhost:3333/answers/6?u=53e0611a-5063-4b9e-a3a1-e5d883d0cd0e
    /**
     * 
     * Route params=> Parametros que compõe a rota ->
     * routes.get("/answers/:value")
     * 
     * Query Params => Busca, paginacao, não obrigatórios -> vem sempre depois do ?
     * chave = valor
     */

    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id:String(u)
        });

        if (!surveyUser) {
            throw new AppError("Survey User does not exists!")
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export{AnswerController}