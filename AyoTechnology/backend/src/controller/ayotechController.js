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

endpoints.get("/verificar", async(req,resp) =>{
    try {
        let email = req.query.email
        if(!email){
            email = "";
        }
        let consulta = await db.VerificarUser(email)
        resp.send(consulta)
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default endpoints;