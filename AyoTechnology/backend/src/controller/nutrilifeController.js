import * as db from "../repository/nutrilifeRepository.js";

import { Router } from "express";
const endpoints = Router()

endpoints.post('/cadastro', async(req, resp) =>{
    try {
        let paciente = req.body;
        let idInserido = await db.inserirPaciente(paciente)

        resp.send({
            novoId:idInserido
        })


    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default endpoints;