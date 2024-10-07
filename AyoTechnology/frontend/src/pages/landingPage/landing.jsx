export default function Landing() {
  return (
    <div>
      {/*primeira tela*/}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${"/assets/image/imagem1.svg"})` }}
      >
        {/*cabeçalho*/}
        <div className="text-zinc-100 flex justify-between mx-32 space-y-6 mb-32 ">

        <button className="relative inline-flex items-center px-6 py-2  border-2 border-transparent rounded-full bg-transparent group ">
            <p className=" font-montserrat text-2xl">Sobre nós</p>

            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-violet-700 to-indigo-700 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>

          </button>

          <button className="relative inline-flex items-center px-6 py-2 text-zinc-100  border-2 border-transparent rounded-full bg-transparent group">
          <p className=" font-montserrat text-2xl ">Contatos</p>
            
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-violet-700 to-indigo-700 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          
          </button>

          
          <button className="relative inline-flex items-center px-6 py-2 text-zinc-100 border-2 border-transparent rounded-full bg-transparent group">
          <p className=" font-montserrat text-2xl">Planos</p>
          
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
          
          <h1 className="text-4xl font-bold font-montserrat text-center ">Bem vindo</h1>

<div className=" inline-block  flex-col text-zinc-100 space-y-20 mt-12 ">
          <p className="text-5xl ms-28">
            A AYO TECHNOLOGY está pronta para atender suas necessidades e
            entregar o melhor serviço possível!
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
