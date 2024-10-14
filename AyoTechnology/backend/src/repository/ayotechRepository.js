import con from "./connection.js";

//adiciona paciente
export async function registroUser(user) {
  const comando = `
   insert into tb_user(email_user, password_user)
values (?,?)`;

  const resposta = await con.query(comando, [user.email, user.password]);
  let info = resposta[0];

  return info.insertId;
}

export async function VerificarUser( email) {
  const comando = `SELECT id_user,
       email_user,
       password_user
        FROM tb_user
        WHERE email_user LIKE ?; `;
        const resposta = await con.query(comando, ["%"+email+ "%"])
        let info = resposta[0]
        return info 
}
