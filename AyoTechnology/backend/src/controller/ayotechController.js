import * as db from "../repository/ayotechRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET;

import { Router } from "express";
const endpoints = Router();

endpoints.post("/cadastro", async (req, resp) => {
  try {
    const { email, password } = req.body;
    let idInserido = await db.registroUser(email, password);

    resp.send({
      novoId: idInserido,
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

endpoints.post("/login", async (req, resp) => {
  try {
    const { email, password } = req.body;

    const uservalido = await db.verificarLogin(email, password);

    if (uservalido) {
      resp.send({
        message: "login feito com sucesso",
      });
    } else {
      resp.status(400).send({
        message: "usuário ou senhas incorreto.",
      });
    }
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

export default endpoints;
