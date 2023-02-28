// import './App.css';
import LogoUmkm from "./assets/logo.png";
import LogoUtama from "./assets/landingpage.png";
// import { Routes, Route, Link } from 'react-router-dom'
// import Register from './routes/Register'
// import Login from './routes/Login'


function App() {
  return (
    <div className="App bg-blue-900">
      <header className='container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36'>
        <img alt="logo-umkm" src={LogoUmkm} className="w-56"/>
      </header>

      <main className="container max-5xl max-auto grid grid-cols-2 gap-4 pt-28">
        <div>
          <h1 className="font-bold text-6xl text-white pb-5 ml-12">
            Bersama UMKM
            <br/>
            Membangun Negeri
          </h1>
          <div className="font-semibold text-3xl text-blue-500 pb-16 ml-12">
          UMKM Juara, UMKM Goes to 
          <br/>
          Digital Marketing
          </div>
          <button className="p-12 py-4 px-20 ml-12 bg-neutral-800 text-white font-semibold font-mono rounded-3xl drop-shadow-2xl shadow-xl text-lg">
            Get Start
          </button>
        </div>

        <div className="w-full">
          <img src={LogoUtama} alt="logo_utama"/>
        </div>

        <div class="flex items-center">

        </div>
      </main>
    

      {/* <a>hasil</a> */}
      {/* <div>
        <Link to='/'>Home</Link>
      </div>

        <Routes>
          <Route path='/' element={<Register></Register>} ></Route>
        </Routes> */}
                    {/* <Link to='/'>Home</Link>

                  <Routes>
                    <Route path="/" element={<Login />} />
                  </Routes> */}
        
    </div>
  );
}

export default App;
