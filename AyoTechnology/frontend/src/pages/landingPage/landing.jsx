export default function Landing() {
    return (
      <div 
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${('/assets/imagem1.svg')})` }}>
            <div>
            <h1 className="text-4xl text-zinc-50 font-semi-bold font-montserrat">Meu título</h1>
            </div>
      </div>
    );
  }