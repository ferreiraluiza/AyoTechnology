import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="relative rounded-lg max-w-lg m-auto bg-black-10 px-4 pt-5 pb-4 border border-zinc-200 shadow-[0_2px_4px_rgba(57,62,86,0.5)]">
      <div className=" flex min-h-full flex-col justify-center">
        <div className="mx-auto w-full max-w-md text-center flex flex-col items-center">
          <h2 className="text-center text-black-100 mt-6 text-3xl font-bold tracking-tight">
            Faça login
          </h2>
          <p className="mt-2 text-center text-base text-black-100">
            ou{" "}
            <Link
              to="/register"
              className="font-medium text-purple houver: text-purple-700"
            >
              clique aqui para se registrar
            </Link>
          </p>
        </div>
        <div className="mt-8 mx-auto w-full max-w-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black-100">
                Insira seu Email
              </label>
              <div className="mt-1">
                <input
                id="email"
                name="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md text-black-75 bg-black-2 border border-black-35 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purplecustom focus:drop-shadow-input/18 text-sm"/>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black-100">
                insira sua senha
              </label>
              <div className="mt-1">
                <input
                id="password"
                name="password"
                autoComplete="password"
                required
                className="block w-full appearance-none rounded-md text-black-75 bg-black-2 border border-black-35 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purplecustom focus:drop-shadow-input/18 text-sm"/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="remembe-me" className="ml-2 block text-sm text-black-100">lembre-se de mim 
                </label>
              </div>
            </div>
            <div>
              <button className="disabled:opacity-40 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black-10 houver-bg:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
