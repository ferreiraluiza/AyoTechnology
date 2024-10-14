import "./register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const registrar = async (event) => {
    event.preventDefault();

    if (senha !== senhaConfirmacao) {
      setMensagem("As senhas não coincidem");
      return;
    }
   try {
    const resposta = await axios.post("http://localhost:5001/cadastro", {
      email:email,
      senha: senha,

      
    });
    setMensagem(`Usuário registrado com sucesso! ID: ${resposta.data.novoId}`);

    setTimeout(() => {
      navigate('/login'); // Redireciona para a página de login
    }, 2000);
   } catch (erro) {
    setMensagem(erro.response?.data?.erro || 'Erro ao conectar com o servidor.');

   }



  }
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${"/assets/image/imagem1.svg"})` }}
    >
      <div className="relative rounded-lg max-w-lg m-auto bg-zinc-900 px-4 pt-5 pb-4 border border-zinc-800 shadow-[0_2px_4px_rgba(57,62,86,0.5)]">
        <div className=" flex min-h-full flex-col justify-center">
          <div className="mx-auto w-full max-w-md text-center flex flex-col items-center">
            <h2 className="text-center text-zinc-100 mt-6 text-3xl font-bold tracking-tight">
              Faça seu registro
            </h2>
            <p className="mt-2 text-center text-base text-zinc-300 font-medium">
              Crie sua presença digital com facilidade. Cadastre-se e transforme
              sua ideia em um site incrível!
            </p>
          </div>
          <div className="mt-8 mx-auto w-full max-w-md ">
            <form onSubmit={registrar} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-100"
                >
                  Insira seu Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md text-zinc-100 bg-zinc-800 border border-violet-700 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purplecustom focus:drop-shadow-input/18 text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-100"
                >
                  insira sua senha
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    required
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="block w-full appearance-none rounded-md text-zinc-100 bg-zinc-800 border border-violet-700 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purplecustom focus:drop-shadow-input/18 text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="passwordAgain"
                  className="block text-sm font-medium text-zinc-100"
                >
                  insira sua senha novamente
                </label>
                <div className="mt-1">
                  <input
                    id="passwordAgain"
                    name="passwordAgain"
                    required
                    type="password"
                    value={senhaConfirmacao}
                    onChange={(e) => setSenhaConfirmacao(e.target.value)}
                    className="block w-full appearance-none rounded-md text-zinc-100 bg-zinc-800 border border-violet-700 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purplecustom focus:drop-shadow-input/18 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remembe-me"
                    className="ml-2 block text-sm text-zinc-100"
                  >
                    lembre-se de mim
                  </label>
                </div>
              </div>
              <div>
                <button type="submit"
                className="disabled:opacity-40 flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-black-10 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2">
                  Registrar
                </button>
              </div>
              {mensagem && <p className="text-zinc-50"> {mensagem}</p>}

              <div className="mt-6 ">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 " />
                  </div>
                  <div className="relative flex justify-center text-sm ">
                    <span className="bg-zinc-900 text-zinc-100 ">
                      Já possui conta?{" "}
                      <Link
                        to="/login"
                        className="font-medium text-violet-600 hover:text-violet-500"
                      >
                        Clique aqui
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
