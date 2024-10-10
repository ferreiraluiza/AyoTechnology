import { useState } from "react";
import { CircleUserRound } from "lucide-react";
export default function Landing() {
  return (
    <div>
      {/*primeira tela*/}
      <div
        className="h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${"/assets/image/imagem1.svg"})` }}
      >
        {/*cabeçalho*/}
        <div className="text-zinc-100 flex justify-between items-center text-center mx-32 mb-32
        py-7">

          <button className="relative inline-flex items-center px-6 py-2  border-2 border-transparent rounded-full bg-transparent group ">
            <p className=" font-montserrat text-2xl">Sobre nós</p>

            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-violet-700 to-indigo-700 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>

          </button>

          <button className="relative inline-flex items-center px-6 py-2  border-2 border-transparent rounded-full bg-transparent group ">
            <p className=" font-montserrat text-2xl">Contatos</p>

            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-violet-700 to-indigo-700 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>

          </button>

          <button
            className="px-8 py-2 border-2 border-transparent rounded-full 
          bg-gradient-to-r from-violet-600 to-indigo-500
           hover:from-violet-700 hover:to-indigo-700 transition-colors duration-300"
          >

            <p className="text-2xl font-montserrat font-medium text-zinc-100">
              Login
            </p>

          </button>
        </div>

        {/*restante*/}

        <div className="flex justify-center flex-col text-zinc-100 space-y-20 mt-12">

          <h1 className="text-7xl font-bold font-montserrat text-center ">Bem vindo</h1>

          <div className=" flex justify-center items-center text-center text-zinc-100 space-y-20 mt-12 ">
            <p className="text-medio font-light font-poppins">
              A AYO TECHNOLOGY está pronta para atender <br /> suas necessidades e
              entregar o melhor serviço <br /> possível!
            </p>
          </div>
        </div>
      </div>


      {/*segunda tela */}
      <div
        className="h-screen bg-cover bg-center text-zinc-100"
        style={{ backgroundImage: `url(${"/assets/image/imagem2.svg"})` }}>

        <div className="flex justify-center items-center py-9">
          <h1 className="text-6xl font-bold font-montserrat text-center">Conheça nossa equipe</h1>
        </div>

        {/*cards*/}

        <div className="flex justify-center items-center">

          <div>
            
          </div>

        </div>
      </div>

    </div>
  );
}
