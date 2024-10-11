import "./App.css";
export default function App() {
  return (
    <div>
      {/*primeira tela*/}
      <div
        className="h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${"/assets/image/imagem1.svg"})` }}
      >
        {/*cabeçalho*/}
        <div
          className="text-zinc-100 flex justify-between items-center text-center mx-32 mb-32
      py-7"
        >
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
          <h1 className="text-7xl font-bold font-montserrat text-center ">
            Bem vindo
          </h1>

          <div className=" flex justify-center items-center text-center text-zinc-100 space-y-20 mt-12 ">
            <p className="text-medio font-light font-poppins">
              A AYO TECHNOLOGY está pronta para atender <br /> suas necessidades
              e entregar o melhor serviço <br /> possível!
            </p>
          </div>
        </div>
      </div>

      {/*segunda tela */}
      <div
        className="h-screen bg-cover bg-center text-zinc-100"
        style={{ backgroundImage: `url(${"/assets/image/imagem2.svg"})` }}
      >
        <div className="flex justify-center items-center py-9">
          <h1 className="text-6xl font-bold font-montserrat text-center">
            Conheça nossa equipe
          </h1>
        </div>

        <div className="flex justify-center items-center text-center flex-col py-9">

          <div className="flex flex-row">
            
          <div className="flex flex-col">
            <div className="bg-violet-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <img src="/assets/image/user.png" className="" />
            </div>

            <h2 className="text-zinc-100 mt-2">João Victor</h2>
            <p className="text-zinc-100">um simples dev que está se formando</p>
            <p className="text-zinc-100">um simples dev que está se formando</p>
            <p className="text-zinc-100">um simples dev que está se formando</p>
          </div>

            <div className="flex flex-col">
            <div className="bg-violet-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <img src="/assets/image/user.png" className="" />
            </div>

            <h2 className="text-zinc-100 mt-2">Arthur teodoro</h2>
            <p className="text-zinc-100">um simples dev que está se formando</p>
            <p className="text-zinc-100">um simples dev que está se formando</p>
            <p className="text-zinc-100">um simples dev que está se formando</p>
          </div>

          <div className="flex flex-col">
            <div className="bg-violet-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <img src="/assets/image/user.png" className="" />
            </div>

            <h2 className="text-zinc-100 mt-2">Anna Luiza</h2>
            <p className="text-zinc-100">um simples dev que está se formando</p>
            <p className="text-zinc-100">um simples dev que está se formando</p>
            <p className="text-zinc-100">um simples dev que está se formando</p>
          </div>
          </div>
        </div>
      </div>
      {/*terceira tela*/}

      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${"/assets/image/imagem1.svg"})` }}
      >
        <div className="flex justify-center items-center text-center py-9 flex-col mx-16 ">
          <h1 className=" text-5xl font-bold font-montserrat  text-purple-500 py-9">
            Sobre nós
          </h1>

          <div className="text-zinc-100 text-2xl px-28">
            <p>
              {" "}
              Na Ayo technology, acreditamos no poder da tecnologia para
              transformar o mundo. Fundada em 2024, nossa empresa se dedica a
              criar soluções de software inovadoras que atendem às necessidades
              de empresas e indivíduos em constante evolução. Com uma equipe de
              desenvolvedores talentosos e apaixonados, nos especializamos em
              desenvolver software personalizado que simplifica processos
              complexos, melhora a eficiência e oferece experiências digitais
              excepcionais. Trabalhamos em parceria com nossos clientes para
              entender profundamente seus desafios e oportunidades, criando
              soluções sob medida que realmente fazem a diferença. Nossa missão
              é capacitar nossos clientes com ferramentas tecnológicas que os
              ajudem a alcançar seus objetivos, seja otimizar operações
              internas, melhorar a comunicação com clientes ou inovar em seus
              mercados. Acreditamos que um software bem projetado não é apenas
              funcional, mas também intuitivo e agradável de usar. Com um
              compromisso inabalável com a qualidade, a segurança e a inovação,
              estamos sempre explorando as últimas tendências e tecnologias para
              oferecer soluções que estejam à frente do seu tempo. Para nós,
              cada projeto é uma oportunidade de criar algo extraordinário, que
              não só atenda às expectativas, mas as supere. Junte-se a nós nessa
              jornada de transformação digital. Vamos construir o futuro juntos,
              um software de cada vez.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-purple-500">entre em contato conosco:</h2>

          <div className="flex flex-row">
            <h3 className="text-zinc-100 font-bold">telefone: </h3>
            <p className="text-zinc-100">11 9220-9924</p>
          </div>
        </div>
      </div>
    </div>
  );
}
