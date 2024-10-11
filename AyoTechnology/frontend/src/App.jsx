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

        <div className="flex justify-center items-center text-center flex-col font-montserrat">
          <div className="flex flex-row items-center justify-center m-44 space-x-48">
            <div className="flex flex-col  ">
              <div className="bg-violet-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <img src="/assets/image/user.png" />
              </div>

              <h2 className="text-zinc-100 mt-3 font-semibold">João Victor</h2>
              <p className="text-zinc-100 w-96 text-lg ">
                Sou um programador em formação, e cada dia parece uma nova
                descoberta. No começo, fiquei um pouco perdido com tanta coisa
                para aprender, desde lógica de programação até as diferentes
                linguagens e frameworks. Mas, aos poucos, estou pegando o jeito.
              </p>
            </div>

            <div className="flex flex-col ">
              <div className="bg-violet-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <img src="/assets/image/user.png" />
              </div>

              <h2 className="text-zinc-100 mt-3 font-semibold">
                Arthur teodoro
              </h2>
              <p className="text-zinc-100 w-96 text-lg">
                Sou um programador em formação, e cada dia parece uma nova
                descoberta. No começo, fiquei um pouco perdido com tanta coisa
                para aprender, desde lógica de programação até as diferentes
                linguagens e frameworks. Mas, aos poucos, estou pegando o jeito.
              </p>
            </div>

            <div className="flex flex-col ">
              <div className="bg-violet-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <img src="/assets/image/user.png" />
              </div>

              <h2 className="text-zinc-100 mt-3 font-semibold">Anna Luiza</h2>
              <p className="text-zinc-100 w-96 text-lg">
                Sou um programador em formação, e cada dia parece uma nova
                descoberta. No começo, fiquei um pouco perdido com tanta coisa
                para aprender, desde lógica de programação até as diferentes
                linguagens e frameworks. Mas, aos poucos, estou pegando o jeito.
              </p>
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
            <p className="font-poppins">
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

        <div className="flex flex-row justify-center ">
          <div className="">
            <h2 className="text-violet-500 text-lg font-bold font-montserrat">
              entre em contato conosco:
            </h2>

            <div className="flex flex-row font-poppins ">
              <h3 className="text-zinc-100 font-bold px-1">Telefone: </h3>
              <p className="text-zinc-100">11 9220-9924</p>
            </div>
            <div className="flex flex-row font-poppins">
              <h3 className="text-zinc-100 font-bold px-1 ">Email: </h3>
              <p className="text-zinc-100 ">ayotech@gmail.com </p>
            </div>
          </div>






          <div className="px-24">
            <h2 className="text-violet-500 text-lg font-bold font-montserrat">
              Dados da empresa:
            </h2>

            <div >
              <div className="flex flex-row font-poppins">
                <h3 className="text-zinc-100 font-bold px-1">Endereço:</h3>
                <p className="text-zinc-100 ">
                  Av. Andrômeda, 2.000 - Alphaville,
                </p>
              </div>

              <div className="flex flex-row font-poppins">
                <h3 className="text-zinc-100 font-bold px-1">Bairro:</h3>
                <p className="text-zinc-100 ">Barueri - SP,</p>
              </div>

              <div className="flex flex-row font-poppins">
                <h3 className="text-zinc-100 font-bold px-1">CEP: </h3>
                <p className="text-zinc-100 ">06473-000</p>
              </div>

              <div className="flex flex-row font-poppins">
                <h3 className="text-zinc-100 font-bold px-1">CNPJ:</h3>
                <p className="text-zinc-100 ">04.354.654/0021-22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
