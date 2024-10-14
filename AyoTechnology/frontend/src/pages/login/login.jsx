import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${"/assets/image/imagem1.svg"})` }}
    >
      <div className="relative rounded-lg max-w-lg m-auto bg-zinc-900 px-4 pt-5 pb-4 border border-zinc-800 shadow-[0_2px_4px_rgba(57,62,86,0.5)]">
        <div className=" flex min-h-full flex-col justify-center">
          <div className="mx-auto w-full max-w-md text-center flex flex-col items-center">
            <h2 className="text-center text-zinc-100 mt-6 text-3xl font-bold tracking-tight">
              Faça Login
            </h2>
            <p className="mt-2 text-center text-base text-zinc-300 font-medium">
              Seja bem-vindo de volta! Está preparado para transformar o seu
              sonho em um site que pode revolucionar o futuro?
            </p>
          </div>
          <div className="mt-8 mx-auto w-full max-w-md ">
            <div className="space-y-6">
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
                <button className="disabled:opacity-40 flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-black-10 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2">
                  Registrar
                </button>
              </div>
              <div className="mt-6 ">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 " />
                  </div>
                  <div className="relative flex justify-center text-sm ">
                    <span className="bg-zinc-900 text-zinc-100 ">
                      Ainda não possui conta? {"  "}
                      <Link
                        to="/register"
                        className="font-medium text-violet-600 hover:text-violet-500"
                      >
                        Clique aqui
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
