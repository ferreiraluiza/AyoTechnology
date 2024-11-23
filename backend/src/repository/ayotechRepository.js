import con from "./connection.js";

//adiciona user
export async function registroUser(email, password) {
  const comando = `
   insert into tb_user(email_user, password_user)
values (?,?)`;



  const resposta = await con.query(comando, [email, password]);
  let info = resposta[0];
  return info.insertId;
}

export async function verificarLogin(email,password) {
  const comando =`
  select id_user, email_user, password_user
  from tb_user
  where email_user = ? AND  password_user = ?;
  `

  const [linhas] = await con.query(comando, [email, password])

  return linhas.length > 0;
}

