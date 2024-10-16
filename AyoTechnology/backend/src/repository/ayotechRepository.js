import con from "./connection.js";

//adiciona paciente
export async function registroUser(user) {
  const comando = `
   insert into tb_user(email_user, password_user)
values (?,?)`;



  const resposta = await con.query(comando, [user.email, user.Senha]);
  let info = resposta[0];
  return info.insertId;
}

export async function buscarUsuarios() {
  const comando = `
    SELECT id_user, email_user  
    FROM tb_user`;

  const resposta = await con.query(comando);
  return resposta[0] [0]; 
}

