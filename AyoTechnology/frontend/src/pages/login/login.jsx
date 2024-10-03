import loginBackground from '../assets/login.jpg'; // Importe a imagem

export default function Login() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${loginBackground})` }}>

        <div className='flex space-y-5 flex-col bg-white/5'>
            <input type="email"
            placeholder='digite seu email'/>

            <input type="email"
            placeholder='digite sua senha' />
        </div>

    </div>
  );
}
