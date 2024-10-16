import con from "./connection.js";
import bcrypt from "bcryptjs"
//adiciona paciente
export async function registroUser(user) {
  const comando = `
   insert into tb_user(email_user, password_user)
values (?,?)`;

const hashSenha = await bcrypt.hash(user.password)

  const resposta = await con.query(comando, [user.email, hashSenha]);
  let info = resposta[0];

  return info.insertId;
}

export async function buscarUsuarios() {
  const comando = `
    SELECT id_user, email_user, password_user 
    FROM tb_user`;

  const resposta = await con.query(comando);
  return resposta[0]; // Retorna o array com todos os usuários
}

export async function buscarUsuarioPorEmail(email) {
  const comando = `
    SELECT * FROM tb_user 
    WHERE email_user = ?
  `;

  const [linhas] = await con.query(comando, [email]);
  return linhas[0] || null
}
