import * as db from "../repository/ayotechRepository.js";

import { Router } from "express";
const endpoints = Router()

endpoints.post('/cadastro', async(req, resp) =>{
    try {
        let user = req.body;
        let idInserido = await db.registroUser(user)

        resp.send({
            novoId:idInserido
        })
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.get('/usuarios', async (req, resp) => {
    try {
        // Função que busca todos os usuários no banco
        let usuarios = await db.buscarUsuarios();

        resp.send(usuarios);
    } catch (err) {
        resp.status(500).send({
            erro: err.message
        });
    }
});


export default endpoints;