import con from "./connection.js";

export async function inserirPaciente(paciente){
    const comando = `
   INSERT INTO tb_cadastro (nome, data_nascimento, genero, email, telefone, endereco, info_saude)
VALUES ('?', '?', '?', '?', '?', '?', '?');`

const resposta = await con.query(comando, [paciente.nome, paciente.data_nascimento, paciente.genero, paciente.email,paciente.telefone, paciente.endereco, paciente.info_saude])
let info = resposta [0]

return info.insertId
}